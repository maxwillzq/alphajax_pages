'use client';

import React, { useEffect, useState } from 'react';

interface StockEvent {
  Ticker: string;
  Type: string;
  Date: string;
  Details: string;
}

export default function CalendarPage() {
  const [events, setEvents] = useState<StockEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/stock_events.json')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch events:', err);
        setLoading(false);
      });
  }, []);

  // Current date is 2026-04-25 based on metadata
  const currentDate = new Date('2026-04-25');
  const nextWeekDate = new Date('2026-04-25');
  nextWeekDate.setDate(currentDate.getDate() + 7);

  // Filter and Sort
  const processedEvents = events
    .filter((event) => {
      const eventDate = new Date(event.Date);
      return eventDate >= currentDate;
    })
    .sort((a, b) => {
      return new Date(a.Date).getTime() - new Date(b.Date).getTime();
    });

  const nextWeekEvents = processedEvents.filter((event) => {
    const eventDate = new Date(event.Date);
    return eventDate <= nextWeekDate;
  });

  const furtherEvents = processedEvents.filter((event) => {
    const eventDate = new Date(event.Date);
    return eventDate > nextWeekDate;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 p-6 font-sans">
      <div className="max-w-4xl mx-auto py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">
            Stock Events Calendar
          </h1>
          <p className="text-slate-500 text-lg">
            Stay updated with earnings and major events for your watched stocks.
          </p>
        </header>

        {loading ? (
          <div className="text-center text-slate-500">Loading events...</div>
        ) : (
          <div className="space-y-12">
            {/* Section 1: Next Week */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">Next Week</h2>
              {nextWeekEvents.length === 0 ? (
                <p className="text-slate-500">No events scheduled for next week.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-slate-200">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="px-6 py-3 border-b border-slate-200 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Ticker</th>
                        <th className="px-6 py-3 border-b border-slate-200 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Event Type</th>
                        <th className="px-6 py-3 border-b border-slate-200 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 border-b border-slate-200 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nextWeekEvents.map((event, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{event.Ticker}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{event.Type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{event.Date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{event.Details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            {/* Section 2: Further Events */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-800 border-b pb-2">Further Events</h2>
              {furtherEvents.length === 0 ? (
                <p className="text-slate-500">No further events scheduled.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-slate-200">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="px-6 py-3 border-b border-slate-200 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Ticker</th>
                        <th className="px-6 py-3 border-b border-slate-200 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Event Type</th>
                        <th className="px-6 py-3 border-b border-slate-200 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 border-b border-slate-200 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {furtherEvents.map((event, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{event.Ticker}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{event.Type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{event.Date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{event.Details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

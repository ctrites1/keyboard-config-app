import React from 'react';
import { Head } from '@inertiajs/react';
import { InertiaLink } from '@inertia/inertia-react';

interface Keyboard {
    id: number;
    name: string;
    description: string;
    form_factor: string;
    num_keys: number;
}

interface Props {
    keyboards: Keyboard[];
    formFactors: string[];
    currentFilter: string | null;
}

export default function KeyboardIndex({ keyboards, formFactors, currentFilter }: Props) {
    return (
    <>
            <Head title="Keyboards"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">

              <h1 className="text-2xl font-bold mb-6">Keyboards</h1>

              {/* Form Factor Filter */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filter">
                  Filter by Form Factor
                </label>
                <div className="flex items-center">
                  <select
                    id="filter"
                    className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => {
                      if (e.target.value) {
                        window.location.href = `/keyboards?form_factor=${e.target.value}`;
                      } else {
                        window.location.href = '/keyboards';
                      }
                    }}
                    value={currentFilter || ''}
                  >
                    <option value="">All Form Factors</option>
                    {formFactors.map((factor) => (
                      <option key={factor} value={factor}>
                        {factor}
                      </option>
                    ))}
                  </select>

                  {currentFilter && (
                    <a href="/keyboards" className="ml-2 text-blue-500 hover:underline">
                      Clear Filter
                    </a>
                  )}
                </div>
              </div>

              {/* Keyboards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyboards.map((keyboard) => (
                  <div key={keyboard.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-4">
                      <h2 className="text-xl font-semibold">{keyboard.name}</h2>
                      <p className="text-gray-600 text-sm">{keyboard.form_factor} • {keyboard.num_keys} keys</p>
                      <p className="mt-2 text-gray-700 line-clamp-2">{keyboard.description}</p>
                      <div className="mt-4">
                        <a
                          href={`/keyboards/${keyboard.id}`}
                          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {keyboards.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No keyboards found. Try a different filter.</p>
                </div>
              )}

            </div>
          </div>
                </div>
            </div>
        </>
    )
}

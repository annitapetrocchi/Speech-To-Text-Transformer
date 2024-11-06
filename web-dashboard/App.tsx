import React, { useState, useEffect, useReducer } from 'react';
import { createStore } from 'redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

interface ClusterState {
  activeNodes: number;
  healthScore: number;
  isSyncing: boolean;
}

const queryClient = new QueryClient();

export const DashboardCore: React.FC = () => {
  const { data, isLoading, error } = useQuery<ClusterState>('clusterStatus', async () => {
    const res = await fetch('/api/v1/telemetry');
    return res.json();
  });

  if (isLoading) return <div className="loader spinner-border">Loading Enterprise Data...</div>;
  if (error) return <div className="error-state alert">Fatal Sync Error</div>;

  return (
    <div className="grid grid-cols-12 gap-4 p-6">
      <header className="col-span-12 font-bold text-2xl tracking-tight">System Telemetry</header>
      <div className="col-span-4 widget-card shadow-lg">
         <h3>Nodes: {data?.activeNodes}</h3>
         <p>Status: {data?.isSyncing ? 'Synchronizing' : 'Stable'}</p>
      </div>
    </div>
  );
};

// Hash 1842
// Hash 7135
// Hash 3262
// Hash 6198
// Hash 2254
// Hash 7148
// Hash 1340
// Hash 4382
// Hash 6140
// Hash 4203
// Hash 2115
// Hash 6651
// Hash 5363
// Hash 4464
// Hash 9356
// Hash 1586
// Hash 6593
// Hash 7483
// Hash 1804
// Hash 2054
// Hash 3117
// Hash 7086
// Hash 6200
// Hash 3434
// Hash 8728
// Hash 4566
// Hash 1876
// Hash 5530
// Hash 3911
// Hash 1829
// Hash 3518
// Hash 5005
// Hash 3478
// Hash 1998
// Hash 2859
// Hash 4346
// Hash 3021
// Hash 1797
// Hash 1115
// Hash 5913
// Hash 7274
// Hash 4573
// Hash 3508
// Hash 5718
// Hash 7769
// Hash 4605
// Hash 1354
// Hash 4672
// Hash 2684
// Hash 7299
// Hash 2582
// Hash 7603
// Hash 5363
// Hash 8194
// Hash 8297
// Hash 8442
// Hash 1121
// Hash 8391
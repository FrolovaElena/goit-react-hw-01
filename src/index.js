import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile/Profile';
import Stats from './components/Stats/Stats';
import PricingPlan from './components/PricingPlan/PricingPlan';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import pricingPlan from './assets/princing-plan.json';
import transactions from './assets/transactions.json';

const user = {
  name: 'Timothy Grant',
  tag: 'tgrant',
  location: 'Sao Paulo, Brasil',
  avatar:
    'http://okcolab.sasquatchstudio.co/wp-content/uploads/2017/05/avatar-sample.jpg',
  stats: {
    followers: 198,
    views: 368,
    likes: 492,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 32 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
];

ReactDOM.render(
  <div>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={pricingPlan} />
    <TransactionHistory items={transactions} />
  </div>,
  document.querySelector('#root'),
);

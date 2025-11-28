import { useState } from 'react';
import { BarChart2, LifeBuoy, LogOut, Settings, FolderKanban, FileUp } from 'lucide-react';
import EvidenceTab from '../components/dashboard/EvidenceTab';
import { useAuth } from '../contexts/AuthContext';

const tabs = [
    { name: 'Evidence', icon: FileUp },
    { name: 'Reports', icon: BarChart2 },
    { name: 'Resources', icon: LifeBuoy },
    { name: 'Settings', icon: Settings }
];

interface Report {
    url: string;
    generatedAt: Date;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Evidence');
  const { signOut } = useAuth();
  const [reports, setReports] = useState<Report[]>([]);

  const handleReportGenerated = (reportUrl: string) => {
    const newReport = { url: reportUrl, generatedAt: new Date() };
    setReports(prevReports => [newReport, ...prevReports]);
    setActiveTab('Reports');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Evidence':
        return <EvidenceTab onReportGenerated={handleReportGenerated} />;
      case 'Reports':
        return reports.length > 0 ? (
            <div className='w-full'>
                <h3 className='text-xl font-semibold mb-4 text-left'>Generated Reports</h3>
                <ul className='space-y-3'>
                    {reports.map((report, index) => (
                        <li key={index} className='bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center'>
                            <div>
                                <p className='font-semibold'>Report #{reports.length - index}</p>
                                <p className='text-sm text-gray-500'>Generated on: {report.generatedAt.toLocaleString()}</p>
                            </div>
                            <a href={report.url} target='_blank' rel='noopener noreferrer' className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                                Download
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
          <div className='text-center'>
            <FolderKanban size={64} className='mx-auto text-gray-400 mb-4' />
            <h3 className='text-xl font-semibold'>No Reports Generated Yet</h3>
            <p className='text-gray-500'>Generate reports from your analyzed evidence in the 'Evidence' tab.</p>
          </div>
        );
      case 'Resources':
        return (
          <div className='text-center'>
            <LifeBuoy size={64} className='mx-auto text-gray-400 mb-4' />
            <h3 className='text-xl font-semibold'>Support Resources</h3>
            <p className='text-gray-500'>Find help and support from trusted organizations.</p>
          </div>
        );
      case 'Settings':
        return (
          <div className='text-center'>
            <Settings size={64} className='mx-auto text-gray-400 mb-4' />
            <h3 className='text-xl font-semibold'>App Settings</h3>
            <p className='text-gray-500'>Manage your security and preferences.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold text-gray-800'>Reclaim AI Dashboard</h1>
          <button onClick={signOut} className='flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg'>
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
        <div className='mb-6'>
          <div className='sm:hidden'>
            <select id='tabs' name='tabs' className='block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500' defaultValue={activeTab} onChange={(e) => setActiveTab(e.target.value)}>
              {tabs.map((tab) => <option key={tab.name}>{tab.name}</option>)}
            </select>
          </div>
          <div className='hidden sm:block'>
            <div className='border-b border-gray-200'>
              <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-2 ${activeTab === tab.name ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                    <tab.icon size={18} />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md min-h-[60vh] flex items-start justify-center'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

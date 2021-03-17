import dynamic from 'next/dynamic';

const DiceProvider = dynamic(() => import('./component'), { ssr: false });

export default DiceProvider;

import { asset } from '../utils/assets';

export default function PearlDivider() {
  const pearl = asset('MultiBlock_Pearl.png');

  return (
    <div
      className="w-full h-[26px]"
      style={{
        backgroundColor: '#f6f4f1',
        backgroundImage: `url(${pearl})`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: '18px 18px',
        backgroundPosition: 'center center',
      }}
    />
  );
}

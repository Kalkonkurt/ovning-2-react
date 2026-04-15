import type { ProfileCardProps } from '../types/profile-card.types';

function ProfileCard({ name, profession, city }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>{profession}</p>
      <p>{city}</p>
    </div>
  );
}

export default ProfileCard;

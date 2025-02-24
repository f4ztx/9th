import Image from "next/image";

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    image: string;
  };
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group">
      <div className="relative">
        {/* Card Shadow/Border */}
        <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] bg-[#001B5E] transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />

        {/* Main Card */}
        <div className="relative bg-[#F1EEF3] border-2 border-[#2A3C50]/20 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-[1.02] saturate-[0.98]"
            />
          </div>
          <div className="p-6">
            <h3 className="font-['Roboto_Condensed'] font-bold text-2xl text-brand-navy/90">
              {member.name}
            </h3>
            <p className="mt-2 font-['Roboto_Mono'] text-sm text-brand-navy/60">
              {member.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

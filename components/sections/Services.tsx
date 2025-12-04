import Image from "next/image";

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <h3>Services We Provide</h3>
      <div className="max-w-7xl mx-auto px-4 grid  gap-6">
        <div className="flex gap-5  flex-col md:flex-row flex-items justify-between">
          <div className="p-8 bg-[#00B99D]  rounded-xl text-white">
            <div className="w-[100px] h-[100px] bg-white/30 rounded-full flex items-center justify-center">
              <Image
                src="/homeIcon.png"
                alt="Triage Home care"
                height={46}
                width={46}
                className="w-10 h-10"
              />
            </div>
            <h4 className="font-medium text-2xl text-white mt-12 mb-5">
              Home Care
            </h4>
            <p className="text-white text-base">Home</p>
          </div>
          <Image
            src="/servicedividerImg.png"
            alt="Triage Services"
            height={311}
            width={75}
            className="hidden md:block"
          />
          <div className="p-8 bg-[#A6D200] rounded-xl text-white">
            <div className="w-[100px] h-[100px] bg-white/30 rounded-full flex items-center justify-center">
              <Image
                src="/consultancyIcon.png"
                alt="Triage Consultancy"
                height={50}
                width={50}
              />
            </div>
            <h4 className="font-medium text-2xl text-white mt-12 mb-5">
              Consultancy
            </h4>
            <p className="text-white text-base">
              Professional consultancy that strengthens your homecare journey
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="p-8 bg-[#B745D8] rounded-xl text-white">
            <Image
              src="/consultancyIcon.png"
              alt="Triage Home care"
              height={100}
              width={100}
            />
            <h4 className="font-medium text-2xl text-white mt-12 mb-5">
              Consultancy
            </h4>
            <p className="tex-white text-base">
              Professional consultancy that strengthens your homecare journey
            </p>
          </div>
          <Image
            src="/serviceImg.png"
            alt="Triage Home care"
            height={324}
            width={622}
          />
        </div>
      </div>
    </section>
  );
}

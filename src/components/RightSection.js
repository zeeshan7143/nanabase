import Image from "next/image";

export default function RightSection() {
  return (
    <div className="flex-1 bg-gray-100 flex items-center justify-center p-12">
      <div className="relative w-full h-full max-w-2xl">
        {/* Browser Window Illustration */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-blue-100 rounded-lg p-6 shadow-lg w-80">
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
              <Image
                src="/images/icons/mail.png"
                alt="user"
                width={20}
                height={20}
              />
              <div className="flex-1 h-4 bg-gray-200 rounded"></div>
              <Image
                src="/images/icons/green-tick.png"
                alt="check"
                width={16}
                height={16}
              />
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
              <Image
                src="/images/icons/lock.png"
                alt="lock"
                width={20}
                height={20}
              />
              <div className="flex-1 h-4 bg-gray-200 rounded"></div>
              <Image
                src="/images/icons/info-circle.png"
                alt="info"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        {/* Main Illustration - Person with Laptop */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/images/Isolation_Mode.png"
            alt="Person using laptop"
            width={400}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}


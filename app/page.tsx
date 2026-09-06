'use client';
import { useState, useEffect } from 'react';

export default function WeddingInvitation() {
  // แก้ไขรูปแบบวันที่ให้ถูกต้องตามมาตรฐาน (YYYY-MM-DD) เป็น 30 ตุลาคม 2026 เวลา 10:00 น.
  const targetDate = new Date('2026-10-30T10:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#4A4238] flex flex-col items-center py-10 px-4 font-serif">
      {/* Container มือถือ (จำลองหน้าจอสมาร์ทโฟนเพื่อให้เห็นดีไซน์ชัดเจน) */}
      <div className="w-full max-w-md bg-[#FAF8F5] rounded-3xl shadow-xl overflow-hidden border border-[#EBE5DC] p-6 flex flex-col gap-8">
        
        {/* ส่วนหัว: โลโก้และชื่อบ่าวสาว */}
        <div className="text-center flex flex-col items-center pt-4">
          <div className="w-16 h-16 rounded-full border border-[#D4C5B9] flex items-center justify-center text-xl font-semibold mb-4 text-[#7A6B5D]">
            N ❤️ G
          </div>
          <p className="text-xs uppercase tracking-widest text-[#8C7A6B] mb-1">The Wedding Invitation</p>
          <h1 className="text-3xl font-normal tracking-wide text-[#3D352D]">zainun & Flim</h1>
          <p className="text-sm mt-1 text-[#6B5D50]">สุดใจ สะอาดวารี & ศดานัน เจริญรักษ์</p>
        </div>

        {/* ส่วนดุอา / คำอวยพรทางศาสนา */}
        <div className="bg-white/60 p-5 rounded-2xl border border-[#EBE5DC] text-center shadow-sm">
          <p className="text-xs text-[#A89888] mb-2 uppercase tracking-wider">ดุอาอ์อวยพร</p>
          <p className="text-lg font-arabic leading-loose mb-3 text-[#2C241D]">
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p className="text-xs text-[#6B5D50] leading-relaxed">
            &quot;ขออัลลอฮ์ทรงประทานความจำริญแก่ท่านทั้งสอง และทรงเมตตาแก่ท่านทั้งสอง และทรงรวมท่านทั้งสองไว้ในความดีงาม&quot;
          </p>
        </div>

        {/* ส่วนนับถอยหลังสู่วันงาน (Countdown) */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-[#8C7A6B] mb-3">Countdown to Our Special Day</p>
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white p-3 rounded-xl border border-[#EBE5DC] shadow-sm">
              <span className="block text-xl font-bold">{timeLeft.days}</span>
              <span className="text-[10px] text-[#8C7A6B]">วัน</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#EBE5DC] shadow-sm">
              <span className="block text-xl font-bold">{timeLeft.hours}</span>
              <span className="text-[10px] text-[#8C7A6B]">ชั่วโมง</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#EBE5DC] shadow-sm">
              <span className="block text-xl font-bold">{timeLeft.minutes}</span>
              <span className="text-[10px] text-[#8C7A6B]">นาที</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#EBE5DC] shadow-sm">
              <span className="block text-xl font-bold">{timeLeft.seconds}</span>
              <span className="text-[10px] text-[#8C7A6B]">วินาที</span>
            </div>
          </div>
        </div>

        {/* ข้อมูลสถานที่และเวลา */}
        <div className="bg-white/60 p-5 rounded-2xl border border-[#EBE5DC] text-center shadow-sm flex flex-col gap-3">
          <p className="text-xs text-[#A89888] uppercase tracking-wider">สถานที่จัดงาน</p>
          <h3 className="font-medium text-lg">บ้านปากจด</h3>
          <p className="text-xs text-[#6B5D50]">วันศุกร์ ที่ 30 ตุลาคม 2569 เวลา 10:00 น.</p>
          <a 
            href="https://maps.google.com/?q=7.056680,100.694913" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-[#3D352D] text-white text-xs py-2 px-4 rounded-full tracking-wide hover:bg-[#5C5044] transition"
          >
            เปิดใน Google Maps
          </a>
        </div>

        {/* Dress Code */}
        <div className="bg-white/60 p-4 rounded-2xl border border-[#EBE5DC] text-center shadow-sm">
          <p className="text-xs text-[#A89888] uppercase tracking-wider mb-1">Dress Code</p>
          <p className="text-sm font-medium text-[#4A4238]">Formal Wedding Attire</p>
        </div>

        {/* ฟอร์มตอบรับคำเชิญ (RSVP) */}
        <div className="bg-white p-5 rounded-2xl border border-[#EBE5DC] shadow-sm flex flex-col gap-4">
          <h3 className="text-center text-sm uppercase tracking-widest text-[#8C7A6B]">ตอบรับคำเชิญ (RSVP)</h3>
          <form onSubmit={(e) => { e.preventDefault(); alert('บันทึกข้อมูลเรียบร้อยแล้ว ขอบคุณครับ!'); }} className="flex flex-col gap-3">
            <input 
              type="text" 
              placeholder="ชื่อ - นามสกุล ของท่าน" 
              required
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#EBE5DC] focus:outline-none focus:border-[#3D352D] bg-[#FAFAFA]"
            />
            <select className="w-full px-3 py-2 text-xs rounded-lg border border-[#EBE5DC] focus:outline-none focus:border-[#3D352D] bg-[#FAFAFA]">
              <option>มาร่วมงาน</option>
              <option>ไม่สามารถมาร่วมงานได้</option>
            </select>
            <button 
              type="submit" 
              className="w-full bg-[#3D352D] text-white text-xs py-2.5 rounded-lg font-medium hover:bg-[#5C5044] transition"
            >
              ยืนยันการเข้าร่วม
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center text-[10px] text-[#A89888] pb-2">
          The Central Islamic Council of Nakhon Si Thammarat
        </div>

      </div>
    </main>
  );
}
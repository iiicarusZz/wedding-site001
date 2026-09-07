// 1. กำหนดวันและเวลาจัดงานแต่งงาน (ปี-เดือน-วัน เวลา)
const weddingDate = new Date('2026-12-25T08:00:00').getTime();

// 2. ฟังก์ชันคำนวณและอัปเดตตัวเลขถอยหลังทุกๆ 1 วินาที
const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // คำนวณหา วัน, ชั่วโมง, นาที, วินาที
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (100ขั้นตอนที่ 4: ใส่โค้ด JavaScript สำหรับนับถอยหลังและเพิ่มลูกเล่นให้กับฟอร์ม

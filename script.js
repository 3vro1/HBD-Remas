const lid = document.getElementById('lid');
const openBtn = document.getElementById('openBtn');
const message = document.getElementById('message');
const audio = document.getElementById('audio');
const customMessage = document.getElementById('customMessage');

// غيّر الرسالة هنا إذا تحب
customMessage.textContent = "🎉 مفاجأة لك! أحبك من كل قلبي 💖";

openBtn.addEventListener('click', () => {
  // تحريك الغطاء
  lid.style.transform = 'rotateX(150deg)';
  
  // عرض الرسالة
  setTimeout(() => {
    message.style.display = 'block';
  }, 1000);

  // تشغيل الصوت
  audio.play();
});

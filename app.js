// Slider İşlevi
let slideIndex = 0;
const slides = document.querySelectorAll('.slider-image');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
  slideIndex = (slideIndex + 1) % slides.length; // Sıradaki resmi göster
}

// Her 3 saniyede bir kaydır
setInterval(showSlides, 3000);

// İlk resmi göster
showSlides();

/*-----------------------------------*/

function toggleNav() {
    var sidebar = document.getElementById("mySidebar");
    // Sidebar'ı aç veya kapa
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  }

/*-----------------------------------*/
/*Ana Sayfa İletişim*/
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form verilerini al
    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const subject = document.querySelector('input[name="Subject"]').value;
    const message = document.querySelector('textarea[name="Message"]').value;

    // Mesaj içeriğini oluştur
    const emailBody = `------BYÖ🔗MİMARİ------\n\n📌Ad - Soyad: ${name}\n📌E-Posta: ${email}\n\n📌Mesajı:\n${message}\n\n---Bu mesaj otomatik olarak düzenlenmiştir. Lütfen mesajınızı direkt olarak gönderiniz.---`;

    // Mailto linki oluştur
    const mailtoLink = `mailto:berkayozenel1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Mailto linkine yönlendir
    window.location.href = mailtoLink;
});


/*Eray İletişim*/
document.querySelector('#contact-form-eray').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.querySelector('input[name="Name"]').value;
  const email = document.querySelector('input[name="Email"]').value;
  const subject = document.querySelector('input[name="Subject"]').value;
  const message = document.querySelector('textarea[name="Message"]').value;

  const emailBody = `------BYÖ🔗MİMARİ------\n\n📌Ad - Soyad: ${name}\n📌E-Posta: ${email}\n\n📌Mesajı:\n${message}\n\n---Bu mesaj otomatik olarak düzenlenmiştir. Lütfen mesajınızı direkt olarak gönderiniz.---`;

  const mailtoLink = `mailto:eray@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

  window.location.href = mailtoLink;
});

 /*Mustafa İletişim*/
document.querySelector('#contact-form-mustafa').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.querySelector('input[name="Name"]').value;
  const email = document.querySelector('input[name="Email"]').value;
  const subject = document.querySelector('input[name="Subject"]').value;
  const message = document.querySelector('textarea[name="Message"]').value;

  const emailBody = `------BYÖ🔗MİMARİ------\n\n📌Ad - Soyad: ${name}\n📌E-Posta: ${email}\n\n📌Mesajı:\n${message}\n\n---Bu mesaj otomatik olarak düzenlenmiştir. Lütfen mesajınızı direkt olarak gönderiniz.---`;

  const mailtoLink = `mailto:mustafa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

  window.location.href = mailtoLink;
});

/*-----------------------------------*/

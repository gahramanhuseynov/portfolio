document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Linkin varsayılan davranışını engeller (sayfa yenileme)

        // Tıklanan bağlantıya karşılık gelen bölümün id'sine kaydırma işlemi
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',  // Kaydırma efekti
            block: 'start'       // Kaydırma başladığında bölümün başına gelmesi
        });
    });
});
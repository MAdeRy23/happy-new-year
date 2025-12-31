const message = `assalamualaikum 
happy new year, maaf kalau gw ada salah kata dan bikin lu kecewa maaf kalau gw ada kesalahan yg pernah gw lakuin selama ini, maaf gbsa perlakuin lu sebaik orang² lain &
thanks for being exactly who u r & offering mr a friendship Ive wanted an needed.thanks for caring me,for being kind,for listening my lil story,for ur times u gave to me, for everything u did,
and last big thanks for waktu yang lu luangin buat w, semogaa semua hal baik selalu menyertai &  segala hal yang belum tercapai,tercapai di tahun ini,sehat² dhan, sekali lagi maaf dan terimakasih untuk semua yang lu berikan.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

/* Data bersama. Ubah nama cabang, alamat, dan kutipan tokoh di sini. */
const MORA_MENU=[
 {
  "n": "Mōra Ice Latte",
  "k": [
   "coffee"
  ],
  "p": 22000,
  "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuAUaM-2L6o9NEJLjRemTbFDemj4T_xC4qMZSctHcf6_JUrkpVSnf9vWmqQ3-LX38m3tNeUlf9CntwgUkNKk40qmf-gHp6f8NguHmVSvTiSZcOLm1WHZJ3blmFjqfTcKj2b8VMYB7tFwiP88R7LR2tw8JJ2-G1IcR5i0ZQMPUt17Y8uy7_OocZKhAd5b7dl3o3Y_lHz8n2_OoPcGVjbga-E7N9RIpUIiJjceav-xoQte"
 },
 {
  "n": "Mōra Mango Cheese",
  "k": [
   "fruit",
   "cheese"
  ],
  "p": 25000,
  "img": "https://lh3.googleusercontent.com/aida/AEtjO1Wpg_gA4FSU7hH4-Jdq7pT2wR6nOAlG_ze_Z6OYXQq238zIZpwnuWHNzVsY1BYv2QeyDrXqEG8_OKxT__k0yc_S05xQm89hciOqcmuwrFj8xA7cPSyMubdhcgvIVCDC_DQSCPtQu1p2L6lJffM7hB0D3oyvtLIknnGdx3kXvgwX2XTJz85NSkD08CYwRlPdcAoAIH6tc3EUd0z7Lyhyagj3cLWiPi7X-TqDiog3jtEA3Q"
 },
 {
  "n": "Mōra Strawberry Cheese",
  "k": [
   "fruit",
   "cheese"
  ],
  "p": 25000,
  "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDpMUy1BXDwGGxacjGa8kYkzkEydGOfhBT4t-AeRxPrbipIO4I_X5oYf9pt1tihfk8bE_87FjUNFXjheBTH1IRmeYiydmsIPrhS7y06oEMYDFOwEyoYuMbZEV1uWQXmnOoOeoYq8duljLZbR_zfSmuSqkmceftK99IZ1d1gsYCzYq3AjlRRzzVCG5o9EkQLeEf0QvPhsoBkYEB1S6qeBzuiyJeum6E_RVpFQ5o2XQPO"
 },
 {
  "n": "Es Kopi Susu MŌRA",
  "k": [
   "coffee"
  ],
  "p": 20000,
  "img": "assets/img/menu-4.jpg"
 },
 {
  "n": "Matcha Sea Salt Cream",
  "k": [
   "non",
   "cheese"
  ],
  "p": 26000,
  "img": "https://lh3.googleusercontent.com/aida-public/AB6AXuDBADibSORTZ5LbnCkGzRmW3NgESlvijvY-HmdY2w6FOn8vDhSnpAEYJw2cU1sliFEZtAEWJXi7TzEeibNOpm1OZB4BBxHb0mg-WZ3EQAdVXx3MkCqF8tsUmldpe2NShrvXKhowh-feT7RyMvI1dLPwCvaVbqErMAKNJ8OYPWddHGrMKPwDcNud9KLu4hKAMRLZBw3RmLpwupEp8pyTuIhro4RH9uDA01uUY1TMUada"
 },
 {
  "n": "Choco Premium Ganache",
  "k": [
   "non"
  ],
  "p": 24000,
  "img": "assets/img/menu-6.jpg"
 },
 {
  "n": "Brown Sugar Boba Slow Brew",
  "k": [
   "seasonal"
  ],
  "p": 25000,
  "img": "assets/img/menu-7.jpg"
 },
 {
  "n": "Lychee Mint Cold Tea",
  "k": [
   "fruit",
   "seasonal"
  ],
  "p": 21000,
  "img": "assets/img/menu-8.jpg"
 },
 {
  "n": "Taro Velvet Cream Latte",
  "k": [
   "non"
  ],
  "p": 23000,
  "img": "assets/img/menu-9.jpg"
 }
];
const LOK={
 "alamat": "Dekat Lebak, Sumurgung, Kec. Montong, Kabupaten Tuban, Jawa Timur 62357",
 "plus": "2WR5+P3M Sumurgung, Kabupaten Tuban, Jawa Timur",
 "koord": "-6,9581557, 111,9076660",
 "maps": "https://maps.app.goo.gl/wc8B5s2Hr7V1g57c8",
 "cabang": [
  {
   "tag": "Pusat",
   "n": "MŌRA Pusat · Sumurgung",
   "a": "Dekat Lebak, Sumurgung, Kec. Montong, Kabupaten Tuban, Jawa Timur 62357",
   "maps": "https://maps.app.goo.gl/wc8B5s2Hr7V1g57c8"
  },
  {
   "tag": "Cabang 1",
   "n": "MŌRA Tuban Kota",
   "a": "Tuban Kota, Kabupaten Tuban, Jawa Timur",
   "maps": "https://maps.app.goo.gl/8o6nvqru8RcRZ84f9"
  },
  {
   "tag": "Cabang 2",
   "n": "MŌRA Cabang 2",
   "a": "Kabupaten Tuban, Jawa Timur",
   "maps": "https://maps.app.goo.gl/RFN9oEvwW986UGDg7"
  },
  {
   "tag": "Cabang 3",
   "n": "MŌRA Cabang 3",
   "a": "Kabupaten Tuban, Jawa Timur",
   "maps": "https://maps.app.goo.gl/G2jAcQGD2TaKePpc8"
  }
 ]
};
/* Testimoni utama (dari halaman MŌRA sebelumnya). Ubah teks/foto di sini; foto ada di assets/img/creator-*.webp */
const TOKOH=[
 {
  "nama": "Nagita Slavina",
  "peran": "Content Creator & Influencer",
  "foto": "creator-nagita.webp",
  "ig": "https://www.instagram.com/nagitaslavinaa_update",
  "bintang": 5,
  "kutipan": "Udah lama cari minuman yang beneran enak dan estetik buat konten, akhirnya ketemu MŌRA! Mango Cheese-nya creamy banget, mangganya kerasa asli. Wajib dikunjungi!"
 },
 {
  "nama": "Erika Richardo",
  "peran": "Mahasiswi & Food Enthusiast",
  "foto": "creator-erika.webp",
  "ig": "https://www.instagram.com/erikarichardo",
  "bintang": 5,
  "kutipan": "Strawberry Cheese MŌRA ini juaranya! Asem-manisnya pas, cheese cream-nya lumer, dan suasana cafenya bikin betah berlama-lama. Minuman favorit aku sekarang!"
 },
 {
  "nama": "Fujian Utami",
  "peran": "Freelancer & Cafe Hopper",
  "foto": "creator-fujian.webp",
  "ig": "https://www.instagram.com/fuji_an",
  "bintang": 5,
  "kutipan": "Baru pertama kali ke sini diajak teman, langsung jatuh cinta sama tempatnya yang cozy dan hangat. Ice Latte-nya smooth banget, pas buat nemenin WFH seharian!"
 },
 {
  "nama": "Kayes",
  "peran": "Profesional Muda & Coffee Lover",
  "foto": "creator-kayes.webp",
  "ig": "https://www.instagram.com/ewkharis",
  "bintang": 5,
  "kutipan": "MŌRA adalah tempat yang selalu aku rekomendasikan ke teman-teman. Minumannya berkualitas premium tapi harganya tetap masuk akal. Atmosfernya enak banget buat ngobrol santai."
 }
];

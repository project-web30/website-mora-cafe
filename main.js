/* Fungsi bersama: keranjang (localStorage), toast, tambah ke keranjang, formulir WhatsApp, kupon, filter menu. */
const WA='6285806842437',$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],rp=n=>'Rp '+Number(n).toLocaleString('id-ID');
const cart=()=>JSON.parse(localStorage.getItem('mora_cart')||'[]');
const save=c=>{localStorage.setItem('mora_cart',JSON.stringify(c));badge();dispatchEvent(new Event('cartchange'))};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),txt2=e=>e.textContent.replace(/\s+/g,' ').trim();
function badge(){const n=cart().reduce((a,i)=>a+i.q,0);$$('[data-cart-badge]').forEach(e=>e.textContent=n)}
function toast(t){const e=document.createElement('div');e.className='mora-toast';e.textContent=t;document.body.append(e);setTimeout(()=>e.remove(),1800)}
function addItem(n,o,p){const c=cart(),f=c.find(i=>i.n==n&&i.o==o);f?f.q++:c.push({n,o,p,q:1});save(c);toast(n+' masuk keranjang')}
const price=s=>{const m=(s||'').match(/Rp\.?\s?([\d.]+)/i);return m?+m[1].replace(/\./g,''):0};
function ctx(b){let el=b;while(el&&el!==document.body){const h=el.querySelector('h2,h3'),p=price(el.textContent);if(h&&p)return{n:h.textContent.trim().replace(/\s+/g,' '),p:price(b.textContent)||p};el=el.parentElement}return null}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||b.closest('header')||b.dataset.own!==undefined)return;const t=b.textContent.replace(/\s+/g,' ').trim();
if(/tambah ke keranjang|pesan rekomendasi|tambah(kan)?$/i.test(t)||t=='add'){let c=ctx(b);if(!c)return;let o='Cup S · Manis 50%';
if(document.body.dataset.page=='racik-sendiri'){const i=$('main input[type=text]');c={n:(i&&i.value)||'Racikan Kustom',p:price(t)||c.p};o='Racikan kustom'}
addItem(c.n,o,c.p)}
if(/klaim kupon/i.test(t)){const code=(b.closest('div').parentElement.textContent.match(/[A-Z]{3,}-[A-Z0-9-]{2,}/)||[])[0];if(code){navigator.clipboard&&navigator.clipboard.writeText(code);toast('Kode '+code+' disalin')}}
});
function waMsg(j,info,items,ring){const L=['*MŌRA Caféé — '+j+'*','━━━━━━━━━━━━━━━━━━'];info.filter(x=>x[1]).forEach(x=>L.push(x[0]+': '+x[1]));
if(items&&items.length){L.push('','*🛒 Daftar Pesanan*');items.forEach((i,n)=>L.push((n+1)+'. '+i.n+(i.o?'\n    _'+i.o+'_':'')+'\n    '+i.q+' × '+rp(i.p)+' = '+rp(i.q*i.p)))}
if(ring&&ring.length){L.push('','━━━━━━━━━━━━━━━━━━');ring.forEach(x=>L.push(x[0]+': '+x[1]))}
L.push('','📍 '+LOK.alamat,'🙏 _Pesan ini dibuat otomatis dari website MŌRA Caféé._');return L.join('\n')}
const nowID=()=>new Date().toLocaleString('id-ID',{dateStyle:'full',timeStyle:'short'});
document.addEventListener('submit',e=>{const f=e.target;if(f.dataset.own!==undefined)return;e.preventDefault();const P=document.body.dataset.page,I=[],AREA=['Indoor Nugas','Outdoor Selasar','Ruang Kaca Komunitas'];
$$('input,textarea,select',f).forEach(i=>{let k,v=i.value;if(i.type=='radio'){if(!i.checked)return;k=i.name=='area'?'🪑 Area':'🕐 Jam datang';v=i.name=='area'?AREA[$$('input[name=area]',f).indexOf(i)]:txt2(i.closest('label'))}else if(i.type=='checkbox'&&!i.checked)return;else if(i.id=='guest-count')k='👥 Jumlah tamu';else if(i.type=='date'){k='📅 Tanggal';v=v?new Date(v+'T00:00').toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'}):''}else if(i.type=='tel')k='📱 WhatsApp';else if(i.tagName=='TEXTAREA')k='📝 Catatan';else if(i.type=='email')k='✉️ Email';else k=P=='event-reservasi'?'👤 Nama':'👤 '+(i.placeholder||'Data');if(v)I.push([k,v])});
if(window._acara)I.unshift(['🎟️ Acara',window._acara]);I.unshift(['🕒 Dikirim',nowID()]);
window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(waMsg(P=='event-reservasi'?'Reservasi Meja':P=='lokasi'?'Kritik & Saran':'Pesan dari Website',I)),'_blank')},true);
window.addEventListener('DOMContentLoaded',badge);

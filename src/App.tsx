import { motion } from "motion/react";
import { ArrowUpRight, Scissors, Instagram, Sparkles, BadgeCheck, MapPin, Star, MessageCircle, Map, ChevronRight, User } from "lucide-react";
import { BlurText } from "./components/BlurText";

const WA_NUMBER = "601110501080";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%20GRO%2C%20I%27d%20like%20to%20book%20a%20haircut.`;
const WA_DISPLAY = "+60 11-1050 1080";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-3 bg-white border-b border-gray-200 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3 cursor-pointer group">
          {/* Logo */}
          <div className="h-12 w-12 relative flex items-center justify-center bg-white rounded-full overflow-hidden group-hover:scale-105 transition-transform shrink-0 border-2 border-black">
             <img 
               src="/gro-logo.jpg" 
               alt="GRO Logo" 
               className="w-full h-full object-contain" 
               onError={(e) => {
                 e.currentTarget.style.opacity = '0';
               }} 
             />
          </div>
          <div className="flex flex-col items-start leading-none gap-0.5">
            <span className="font-heading font-black text-lg tracking-tighter text-black uppercase group-hover:text-gray-600 transition-colors">GRO Barbershop</span>
          </div>
        </div>

        {/* Center */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Location', 'Barbers'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-widest text-[#555] hover:text-black transition-colors font-semibold">
              {item}
            </a>
          ))}
        </div>

        {/* Right */}
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="bg-black text-white px-6 py-2.5 text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 hover:bg-gray-800 transition-all">
          Book Now
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-16 px-6 lg:px-12 flex flex-col justify-center items-center bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <div className="w-full max-w-5xl mx-auto mb-8">
          <BlurText 
            text="FIND YOUR FORTE." 
            className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-heading font-black text-black leading-[0.9] tracking-tighter uppercase" 
          />
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="text-base md:text-lg text-gray-600 font-body max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Customized haircuts, premium perms, and genuine advice. Unlock your full potential with absolute confidence.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="bg-black text-white px-10 py-4 flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors text-sm font-bold tracking-widest uppercase w-full sm:w-auto">
            <span>Book on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="#services" className="px-10 py-4 flex items-center justify-center gap-3 text-black border border-black hover:bg-black hover:text-white transition-colors text-sm font-bold tracking-widest uppercase w-full sm:w-auto">
            <span>View Services</span>
          </a>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 relative mt-8"
        >
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2400&q=80" 
            alt="Premium Barbershop Interior" 
            className="w-full h-full object-cover object-center filter grayscale"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 w-full flex flex-col items-center"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">As Seen In</span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-xl md:text-2xl font-serif italic text-black opacity-80">
            <span>TikTok</span>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Google</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="pt-24 pb-32 px-6 lg:px-12 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-0 border border-gray-200">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 w-full bg-white p-12 md:p-20 flex flex-col justify-center"
        >
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-[1] tracking-tighter uppercase mb-6">
            A word <br />From Our <br />Founder
          </h2>
          
          <div className="space-y-6 text-black font-body text-lg leading-relaxed mb-10">
            <p>
              Life is all about finding your forte. Mine is giving you the tools to master your image, unlock your full potential, and seize every opportunity with absolute confidence.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
             <h3 className="text-xl font-bold text-black uppercase tracking-tight">The GRO Team</h3>
             <p className="text-sm text-gray-500 font-medium">Flagship Barbershop • Perlis, Malaysia</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 min-h-[400px] bg-gray-100 relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&w=1200&q=80" 
            alt="Barber tools and craft" 
            className="w-full h-full absolute inset-0 object-cover grayscale"
          />
        </motion.div>

      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-black font-black uppercase tracking-tighter mb-8">Featured Services</h2>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="bg-black text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-colors inline-block">
            See All Services &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Service 1 */}
          <div className="bg-[#FAF9F6] border border-gray-200 flex flex-col w-full relative">
            <div className="absolute top-4 left-4 bg-black text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 z-10">Signature</div>
            <div className="aspect-square w-full bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80" alt="Barber styling hair" className="w-full h-full object-cover filter grayscale" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold font-heading text-black uppercase mb-1">Customized Haircut</h3>
              <p className="font-body text-gray-500 font-medium mb-6">RM 20–25</p>
              <p className="text-sm text-gray-600 mb-8 flex-1 leading-relaxed">
                Industrial fades, modern textures, classic tapers. Every cut tailored to your face shape, hair type, and lifestyle.
              </p>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-full border border-black text-black py-3 text-center uppercase tracking-widest text-xs font-bold hover:bg-black hover:text-white transition-colors">
                Book Service
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-[#FAF9F6] border border-gray-200 flex flex-col w-full relative">
            <div className="absolute top-4 left-4 bg-black text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 z-10">Promo</div>
            <div className="aspect-square w-full bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80" alt="Perm and texture" className="w-full h-full object-cover filter grayscale" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold font-heading text-black uppercase mb-1">Perm & Keratin</h3>
              <p className="font-body text-gray-500 font-medium mb-6">RM 100</p>
              <p className="text-sm text-gray-600 mb-8 flex-1 leading-relaxed">
                Soft curls, silky-straight finishes, and salon-grade texture. Limited-time combo: premium perm + keratin at a flat rate.
              </p>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-full border border-black text-black py-3 text-center uppercase tracking-widest text-xs font-bold hover:bg-black hover:text-white transition-colors">
                Book Combo
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-[#FAF9F6] border border-gray-200 flex flex-col w-full relative">
            <div className="absolute top-4 left-4 bg-gray-300 text-black text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 z-10">Groups</div>
            <div className="aspect-square w-full bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1549463278-f7902d245dae?auto=format&fit=crop&w=800&q=80" alt="Barbershop chair" className="w-full h-full object-cover filter grayscale" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold font-heading text-black uppercase mb-1">Combo & Events</h3>
              <p className="font-body text-gray-500 font-medium mb-6">Custom Quote</p>
              <p className="text-sm text-gray-600 mb-8 flex-1 leading-relaxed">
                Group bookings, convocation cuts (UiTM, TVET). Bring the premium grooming experience to your venue or private group.
              </p>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-full border border-black text-black py-3 text-center uppercase tracking-widest text-xs font-bold hover:bg-black hover:text-white transition-colors">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const cards = [
    { icon: Scissors, title: "Excellent Service", desc: "Every client treated like the main event. From consultation to final brush-off." },
    { icon: Sparkles, title: "Customized Curation", desc: "No cookie-cutter cuts. We read your hair, face, and style before clippers touch." },
    { icon: BadgeCheck, title: "Honest Advice", desc: "Real guidance on hair care, products, and styling — long after you leave." },
    { icon: MapPin, title: "Perlis Flagship", desc: "Centrally located in Perlis. Easy parking, refined environment. Walk-ins welcome." },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-black font-black uppercase tracking-tighter mb-4">Why GRO.</h2>
          <p className="text-gray-500 font-body text-lg">The difference is in the exact details.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="bg-[#FAF9F6] p-8 border border-gray-200 flex flex-col hover:border-black transition-colors duration-300">
              <div className="bg-white w-14 h-14 flex items-center justify-center mb-8 border border-gray-200">
                <c.icon className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-black mb-3">{c.title}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { quote: "BUNYI PALING SATISFYING DI BARBERSHOP — AND THE CUT SPEAKS FOR ITSELF.", author: "@kolejperindulegend" },
    { quote: "BEST FADE I'VE HAD IN PERLIS. BOOKED THROUGH DM, IN AND OUT IN 30 MIN. VERY CLEAN.", author: "Aiman R." },
    { quote: "THE PERM + KERATIN COMBO AT RM100 IS UNREAL VALUE. HAIR FEELS BRAND NEW.", author: "Hafiz Z." },
  ];

  return (
    <section id="gallery" className="py-32 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-black font-black uppercase tracking-tighter mb-4">Loyalty Rewarded</h2>
          <p className="text-gray-500 font-body text-lg">Loved across Perlis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 w-full">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-10 flex flex-col border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-8 text-black">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg font-heading text-black uppercase font-bold leading-relaxed flex-1 mb-10">&quot;{r.quote}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 border border-gray-200 flex items-center justify-center font-bold text-sm text-black uppercase">
                  {r.author.replace('@', '')[0]}
                </div>
                <span className="font-bold text-black text-xs uppercase tracking-widest">{r.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* IG Grid */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-black">From the Chair</h3>
            <a href="https://instagram.com/guntingrambutorang" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black flex items-center gap-2 transition-colors">
              @guntingrambutorang <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1593702295094-aea22597af65?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1512760775924-f7e915fba3ce?auto=format&fit=crop&w=600&q=80"
            ].map((img, i) => (
              <a key={i} href="https://instagram.com/guntingrambutorang" target="_blank" rel="noreferrer" className="group overflow-hidden aspect-square relative bg-gray-100 border border-gray-200">
                <img src={img} alt="Instagram feed" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-black font-black uppercase tracking-tighter mb-4">Visit the shop.</h2>
          <p className="text-gray-500 font-body text-lg">Central Kangar, Perlis. Easy parking, pristine environment.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Map iframe */}
          <div className="flex-1 w-full bg-white border border-gray-200 min-h-[400px] p-2">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.528766100588!2d100.187311!3d6.440263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304cae44a1b026df%3A0xe7a505b87ac08cf2!2sKangar%2C%20Perlis%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1716223594191!5m2!1sen!2sus"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale contrast-[1.1] opacity-90"
            ></iframe>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-10">
            <div className="space-y-3">
              <h3 className="text-xs font-bold tracking-widest text-black uppercase">Flagship Location</h3>
              <p className="text-2xl text-black font-bold uppercase leading-relaxed max-w-sm">
                Kangar, Perlis<br/>
                <span className="text-gray-500 text-sm font-medium mt-1 inline-block normal-case tracking-normal">Near Jln. Sek. Derma / Masjid Putra area</span>
              </p>
            </div>

            <div className="h-px w-full bg-gray-200"></div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold tracking-widest text-black uppercase">Opening Hours</h3>
              <p className="text-xl text-black font-bold uppercase">Daily 10:00 AM – 10:00 PM</p>
              <p className="text-gray-500 text-sm font-medium normal-case">Contact us to confirm slots on public holidays.</p>
            </div>

            <div className="h-px w-full bg-gray-200"></div>

            <div className="space-y-6 pt-4">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-black uppercase mb-3">WhatsApp</h3>
                <p className="text-3xl font-heading font-black text-black tracking-tight">{WA_DISPLAY}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="bg-black text-white px-8 py-4 flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors text-xs font-bold uppercase tracking-widest">
                  <span>Message GRO</span>
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="https://maps.google.com/?q=Kangar,Perlis" target="_blank" rel="noreferrer" className="px-8 py-4 flex items-center justify-center gap-3 text-black border border-black hover:bg-black hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                  <span>Get Directions</span>
                  <Map className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationsBarbers() {
  const branches = [
    {
      name: "Barbershop Kangar Jaya",
      mapLink: "https://maps.google.com/?q=Gunting+Rambut+Orang+Kangar+Jaya",
      barbers: [
        { id: 1, name: "Aqeem", phone: "601167584596" },
        { id: 2, name: "Yuzi", phone: "60103402665" }
      ]
    },
    {
      name: "Barbershop Bintong",
      mapLink: "https://maps.google.com/?q=Gunting+Rambut+Orang+Bintong",
      barbers: [
        { id: 1, name: "Roy", phone: "60145672263" },
        { id: 2, name: "Iman", phone: "60198261410" },
        { id: 3, name: "Ezz", phone: "601126610383" },
        { id: 4, name: "Icap", phone: "60103402665" },
        { id: 5, name: "Pideh", phone: "60163571470" }
      ]
    },
    {
      name: "Kangar (Jln. Derma)",
      mapLink: "https://maps.google.com/?q=Gunting+Rambut+Orang+Kangar",
      barbers: [
        { id: 1, name: "Ucop", phone: "601155509816" },
        { id: 2, name: "Roy", phone: "60178778237" },
        { id: 3, name: "Wan", phone: "60138753594" },
        { id: 4, name: "Aqil", phone: "601133039240" },
        { id: 5, name: "Ammar", phone: "60194557924" }
      ]
    },
    {
      name: "Barbershop Kuala Perlis",
      mapLink: "https://maps.google.com/?q=Gunting+Rambut+Orang+Kuala+Perlis",
      barbers: [
        { id: 1, name: "Daus", phone: "60164298473" },
        { id: 2, name: "Yasin", phone: "601111881277" },
        { id: 3, name: "Afifi", phone: "60184727665" }
      ]
    },
    {
      name: "Rahmah (Masjid Putra)",
      mapLink: "https://maps.google.com/?q=Masjid+Putra+Perlis",
      barbers: []
    }
  ];

  return (
    <section id="barbers" className="py-32 px-6 lg:px-12 bg-black border-y border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-white font-black uppercase tracking-tighter mb-4">Locations & Barbers</h2>
          <p className="text-gray-400 font-body text-lg">Select your preferred branch and book your barber directly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {branches.map(branch => (
            <div key={branch.name} className="flex flex-col items-start w-full bg-[#0a0a0a] p-10 border border-gray-800 hover:border-gray-600 transition-colors">
              {/* Location Overview Header */}
              <div className="w-full mb-10 pb-6 border-b border-gray-900">
                <a href={branch.mapLink} target="_blank" rel="noreferrer" className="group flex flex-col items-start">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-gray-300 transition-colors">{branch.name}</h3>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white flex items-center gap-2 transition-colors">
                    <MapPin className="w-3 h-3" /> Get Directions
                  </div>
                </a>
              </div>
              
              {/* Barbers / Bubbles Array */}
              {branch.barbers.length > 0 && (
                <div className="w-full">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-6">Select a Barber to Book</h4>
                  <div className="flex flex-wrap gap-x-8 gap-y-6">
                    {branch.barbers.map(barber => {
                      const bookingText = `Hai, saya nak book dengan ${barber.name} [Date] [Time]`;
                      const customWaLink = `https://wa.me/${barber.phone}?text=${encodeURIComponent(bookingText)}`;
                      return (
                      <a key={barber.name} href={customWaLink} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 group">
                        {/* Barber Bubble */}
                        <div className="w-16 h-16 rounded-full bg-[#161616] border border-gray-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all shadow-md relative overflow-hidden">
                          <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform origin-center rounded-full duration-300"></div>
                          <span className="font-heading font-black text-2xl text-gray-400 group-hover:text-black transition-colors z-10 relative">{barber.id}</span>
                        </div>
                        <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px] text-center max-w-[80px] leading-tight group-hover:text-white transition-colors">{barber.name}</span>
                      </a>
                    )})}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="py-40 px-6 bg-black relative flex flex-col items-center text-center">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-[3.5rem] md:text-[5rem] font-heading font-black tracking-tighter text-white mb-10 leading-[1] uppercase">
          Your next cut is <br /> one tap away.
        </h2>
        
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="bg-white text-black px-10 py-5 flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors text-sm font-bold tracking-widest uppercase">
          <span>Book on WhatsApp</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#FAF9F6] pt-24 pb-12 px-6 lg:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 lg:mb-32">
        {/* Col 1 */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 relative flex items-center justify-center bg-white rounded-full overflow-hidden shrink-0 border-2 border-black">
               <img 
                 src="/gro-logo.jpg" 
                 alt="GRO Logo" 
                 className="w-full h-full object-contain" 
                 onError={(e) => {
                   e.currentTarget.style.opacity = '0';
                 }} 
               />
            </div>
            <div className="flex flex-col items-start leading-none gap-0.5">
              <span className="font-heading font-black text-2xl tracking-tighter text-black uppercase">GRO</span>
              <span className="font-body text-[0.6rem] font-bold tracking-[0.2em] text-gray-500 uppercase">Barbershop</span>
            </div>
          </div>
          <p className="text-black font-body text-base font-medium uppercase tracking-tight leading-snug max-w-[200px]">The cut your crown deserves.</p>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-6">
          <h4 className="text-black font-bold uppercase tracking-widest text-xs">Services</h4>
          <div className="flex flex-col gap-4">
            {['Haircut', 'Perm', 'Keratin', 'Combo', 'Events'].map(item => (
              <a key={item} href="#services" className="text-gray-500 hover:text-black transition-colors text-sm font-medium uppercase tracking-wide inline-block w-fit">{item}</a>
            ))}
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-6">
          <h4 className="text-black font-bold uppercase tracking-widest text-xs">Connect</h4>
          <div className="flex flex-col gap-4">
            <a href="https://instagram.com/guntingrambutorang" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors text-sm font-medium uppercase tracking-wide flex items-center gap-2 w-fit">
              Instagram <ArrowUpRight className="w-3 h-3"/>
            </a>
            <a href="https://tiktok.com/@boyrascal.GRO" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors text-sm font-medium uppercase tracking-wide flex items-center gap-2 w-fit">
              TikTok <ArrowUpRight className="w-3 h-3"/>
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors text-sm font-medium uppercase tracking-wide flex items-center gap-2 w-fit">
              WhatsApp <ArrowUpRight className="w-3 h-3"/>
            </a>
            <a href="https://linktr.ee/guntingrambutorang.gro" target="_blank" rel="noreferrer" className="text-black hover:text-gray-600 transition-colors text-sm font-bold uppercase tracking-wide inline-block w-fit mt-2 border-b border-black pb-0.5">Linktree</a>
          </div>
        </div>

        {/* Col 4 */}
        <div className="flex flex-col gap-6">
          <h4 className="text-black font-bold uppercase tracking-widest text-xs">Hours</h4>
          <div className="flex flex-col gap-2">
            <span className="text-black text-sm font-bold uppercase tracking-wide">Daily 10:00 AM – 10:00 PM</span>
            <span className="text-gray-500 text-sm font-medium leading-relaxed max-w-[200px]">Perlis, Malaysia.<br/>Message us to confirm exact slots.</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
         <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">&copy; 2026 GRO Barbershop. All rights reserved.</span>
         <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Perlis, Malaysia</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <LocationsBarbers />
      <Location />
      <CTASection />
      <Footer />
    </div>
  );
}

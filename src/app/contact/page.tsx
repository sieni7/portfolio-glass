export default function Contact() {
  return (
    <div className="max-w-xl">
      <h2 className="text-4xl font-bold tracking-tighter mb-8">Contact</h2>
      <div className="bg-glass-bg border border-glass-border backdrop-blur-glass p-10 rounded-3xl shadow-glass">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/60">Email</label>
            <input type="email" className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/20" placeholder="hello@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/60">Message</label>
            <textarea className="bg-white/5 border border-white/10 p-4 rounded-xl h-32 focus:outline-none focus:border-white/20" placeholder="Your message..." />
          </div>
          <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

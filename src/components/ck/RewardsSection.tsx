export default function RewardsSection() {
  return (
    <section
      className="py-20 px-6 text-center text-white"
      style={{ background: "linear-gradient(135deg, #d4956a 0%, #e8b88a 40%, #f0c99a 70%, #e8b88a 100%)" }}
    >
      <p className="text-[13px] font-medium tracking-[0.15em] uppercase mb-4">
        My Calvin Rewards
      </p>
      <h2 className="text-[56px] md:text-[72px] font-light leading-[1.05] mb-6">
        Earn. Redeem. Enjoy.
      </h2>
      <p className="text-[15px] font-light max-w-md mx-auto mb-8 opacity-90 leading-relaxed">
        A new way to experience Calvin Klein. Unlock exclusive benefits designed for you, every time you shop.
      </p>
      <a
        href="#"
        className="inline-block text-[13px] font-medium underline underline-offset-4 tracking-wide hover:opacity-70 transition-opacity"
      >
        Learn More
      </a>
    </section>
  );
}

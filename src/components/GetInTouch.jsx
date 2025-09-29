import Button from "./ui/Button";


const GetInTouch = () => {
  return (
    <section className='bg-[#0058FF] my-8 md:my-10 lg:my-[120px] rounded-3xl p-4 md:p-10 lg:p-20 text-white text-center flex flex-col gap-4 md:gap-6 lg:gap-8'>
      {/* Title */}
      <h2 className="font-bold text-2xl md:text-[32px] lg:text-5xl">Get In Touch</h2>

      <p className="min-[400px]:w-[326px] md:w-[608px] xl:w-[900px] mx-auto text-sm xl:text-[16px]">Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.</p>

      <div className="md:w-[300px] mx-auto">
        <Button label="Book a Professional Plumber" />
      </div>
    </section>
  );
};

export default GetInTouch;
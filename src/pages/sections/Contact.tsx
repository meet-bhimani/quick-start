import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import SectionTitle from "../../components/common/SectionTitle";
import ContactForm from "../../components/ContactForm";

const generateContactCard = ({ icon, label, value }: { icon: React.ReactElement; label: string; value: string }) => {
  return (
    <div className='border shadow-contact flex flex-col items-center justify-center py-6'>
      <div className='border-2 border-dotted border-primary rounded-full text-primary size-[56px] flex items-center justify-center text-2xl'>
        {icon}
      </div>
      <h2 className='font-nunito text-lg font-semibold text-heading py-2'>{label}</h2>
      <p className='text-sm text-default'>{value}</p>
    </div>
  );
};

function Contact() {
  return (
    <section id='contact-section' className='py-14 px-4 sm:px-20'>
      <SectionTitle
        title='Contact'
        subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      />
      <div className='flex flex-col gap-6 mt-14' data-aos='fade-up' data-aos-delay='100'>
        {/* first row - address , contact , email  */}
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* address  */}
          <div className='basis-1/2'>
            {generateContactCard({
              icon: <BsGeoAlt />,
              label: "Address",
              value: "A108 Adam Street, New York, NY 535022",
            })}
          </div>
          {/* contact and email */}
          <div className='flex flex-col md:flex-row basis-1/2 gap-6'>
            <div className='basis-1/2'>
              {generateContactCard({ icon: <BsTelephone />, label: "Call Us", value: "+1 5589 55488 55" })}
            </div>
            <div className='basis-1/2'>
              {generateContactCard({ icon: <BsEnvelope />, label: "Email Us", value: "info@example.com" })}
            </div>
          </div>
        </div>
        {/* second row - map and contact form  */}
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* map  */}
          <div className='basis-1/2'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96779.56628236092!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1720176978798!5m2!1sen!2sus'
              height='400'
              width='100%'
              style={{ border: "0px" }}
              allowFullScreen
              loading='lazy'></iframe>
          </div>
          {/* contact form  */}
          <div className='basis-1/2'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import logo from '../../assets/logo-text.png'

const Footer = () => {
  return (
<div>
<footer className="footer sm:footer-horizontal  text-base-content p-10 mt-16">
      <aside>
        <div>
            <img src={logo} alt="" />
        </div>
        <p className='text-[#64748B] space-y-3'>
Curated tools, technologies, and resources for    <br />developers building
modern software.</p>

 <div className='space-x-3'>
    <a href='https://github.com/Salikur6' target='_blank' className="link link-hover text-[#475569] font-semibold">GitHub</a>
 <a href='https://www.linkedin.com/in/salikur-islam/' target='_blank' className="link link-hover text-[#475569] font-semibold">LinkedIn</a>
 </div>
      </aside>

       <nav>
        <h6 className="footer-title font-bold text-[#0F172A]">Product</h6>
        <a className="link link-hover text-[#64748B]">Home</a>
        <a className="link link-hover text-[#64748B]">Technologies</a>
        <a className="link link-hover text-[#64748B]">Projects</a>
       
      </nav>

      <nav>
        <h6 className="footer-title font-bold text-[#0F172A]">Company</h6>
        <a className="link link-hover text-[#64748B]">About</a>
        <a className="link link-hover text-[#64748B]">Contact</a>
        <a className="link link-hover text-[#64748B]">Careers</a>
       
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-[#0F172A]">Legal</h6>
        <a className="link link-hover text-[#64748B]">Privacy Policy</a>
        <a className="link link-hover text-[#64748B]">Terms of Service</a>
        
      </nav>



     
      
    </footer>


    <footer className='container mx-auto text-[#94A3B8] font-semibold mb-8 text-center'>
    <div className="divider mt-0 ">
    </div>
    &#169; 2026 Dev Stack. All rights reserved.
 
</footer>
</div>

    
  );
};


export default Footer
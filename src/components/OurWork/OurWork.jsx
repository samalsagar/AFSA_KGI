import React from 'react';
import india from '../../assets/Map/testMap.png';
import loca from '../../assets/Map/location.png';
import './OurWork.css'; // Import the external CSS file
import kgi from '../../assets/KGI_LOGO.jpeg'
function OurWork() {
    return (
        <div className='bg-custom-blue pt-10'>
            <h2 className="text-white text-3xl font-extrabold text-center">Our Work</h2>
            <div style={{ position: 'relative', display: 'inline-block' }} className='mt-10 ms-10'>
                {/* India Map */}
                <img src={india} alt="India Map" style={{ width: '100%', height: 'auto' }} />

                {/* Location 1 */}
                <div className="location-wrapper" style={{ top: '41%', left: '56%' }}>
                    <img
                        src={loca}
                        alt="Location Icon"
                    />
                    <div className="hover-text">Ranchi</div>
                </div>

                {/* Location 2 */}
                <div className="location-wrapper" style={{ top: '50%', left: '50%' }}>
                    <img
                        src={loca}
                        alt="Location Icon"
                    />
                    <div className="hover-text">Bhubaneswar</div>
                </div>

                {/* Location 3 */}
                <div className="location-wrapper" style={{ top: '52%', left: '43%' }}>
                    <img
                        src={loca}
                        alt="Location Icon"
                    />
                    <div className="hover-text">Raipur</div>
                </div>

                {/* Location 4 */}
                <div className="location-wrapper" style={{ top: '24%', left: '25%' }}>
                    <img
                        src={loca}
                        alt="Location Icon"
                    />
                    <div className="hover-text">New Delhi</div>
                </div>

                {/* Location 5 */}
                <div className="location-wrapper" style={{ top: '47%', left: '53%' }}>
                    <img
                        src={loca}
                        alt="Location Icon"
                    />
                    <div className="hover-text">Jajpur Road</div>
                </div>
            </div>

            <div className="ps-6 animate__animated animate__fadeIn">

                <h2 className="text-purple-500 text-sm font-semibold text-left sm:text-base md:text-xl lg:text-2xl">
                    Education and Skill Development:
                </h2>

            </div>
            {/* Digital literacy */}
            <div className="relative flex flex-col md:flex-row w-full my-3 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">

                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>

                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Digital literacy:-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        Govt. of India’s ‘National Digital Literacy Mission’ (NDLM) scheme is to provide digital literacy to every Indian. Making one person in every family digitally literate is one of the integral components of the Prime Minister’s vision of “Digital India”.<br /><br />

                        Our unique training module stands on 3 verticals i.e Digital literacy, financial literacy each session duration 10 hours and the Digital Empowerment which session duration is 20 hours in three languages Odia, Hindi and English. We cover rural youth, students, AWWs, WSHG members, and cluster business units supported by MSME Departments. This program envisages enabling people to actively and effectively participate in the democratic and developmental process and enhance their livelihood. After training, all candidates are assessed online by CSC and awarded certificates.
                    </p>
                </div>
            </div>


            {/* Quality Education */}
            <div className="relative flex flex-col md:flex-row w-full my-3 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">


                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Quality Education:-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        Provide quality education to bridge gaps in both urban slums and rural areas for unprivileged and marginal children by supporting remedial teachers. Teaching learning Aids to visually impaired students. Provides scholarship to merit students in school and colleges.
                        Provide quality education to bridge gaps in both urban slums and rural areas for unprivileged and marginal children by supporting remedial teachers. Teaching learning Aids to visually impaired students. Provides scholarship to merit students in school and colleges.
                        Provide quality education to bridge gaps in both urban slums and rural areas for unprivileged and marginal children by supporting remedial teachers. Teaching learning Aids to visually impaired students. Provides scholarship to merit students in school and colleges.
                    </p>
                </div>


                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>

            </div>

            {/* Skill Training */}
            <div className="relative flex flex-col md:flex-row w-full my-3 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">

                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>
                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Skill Training:-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        AFSA conducted skill mapping exercises in different operational area to upgrade their existing skill and introduced new skill. Trainees are also getting all type of support and services to set up their business unit.  No of youth trained on ………. trades.AFSA conducted skill mapping exercises in different operational area to upgrade their existing skill and introduced new skill. Trainees are also getting all type of support and services to set up their business unit.  No of youth trained on ………. trades.AFSA conducted skill mapping exercises in different operational area to upgrade their existing skill and introduced new skill. Trainees are also getting all type of support and services to set up their business unit.  No of youth trained on ………. trades.AFSA conducted skill mapping exercises in different operational area to upgrade their existing skill and introduced new skill. Trainees are also getting all type of support and services to set up their business unit.  No of youth trained on ………. trades.
                    </p>
                </div>


            </div>

            {/* Inclusive Education */}
            <div className="relative flex flex-col md:flex-row w-full my-3 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">


                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Inclusive Education:-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        AFSA defines “child labour” that any children age below 14 years not going to school is under child labour. Organization strategies are to ensure all children below 14 years access to school and regular attending school. Improve quality and relevance of education. Minimize violence in school and zero dropouts. AFSA has formed and strengthens parents- teachers association (PTA) and ensures the regularity of the students. Balpanchayats are formed where student discuss their problems and solve them with the support of PTA. They also motivate dropouts to join school. Organization organizes sensitization meeting for teachers to follow joyful learning and initiate extracurricular activities to attract children. Drop out students have linked to bridge courses. AFSA has been striving to provide best possible effort to poorest talent students in their operational area. Current year organization takes a new initiative that encourages teachers to use mother tongue at least up to third standard for quick grasping of students specially in tribal pockets. However, its endeavour is constrained by limited financial resources. The response of host communities to these initiatives has been overwhelmingly positive.
                    </p>
                </div>


                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>

            </div>
            {/* Health and Nutrition:- */}
            <div className="ps-6 animate__animated animate__fadeIn">

                <h2 className="text-purple-500 text-sm font-semibold text-left sm:text-base md:text-xl lg:text-2xl">
                    Health and Nutrition:-
                </h2>
                <p className='text-justify pe-6 text-white'>To ensure micro level health economics in balance of hard-core poor, AFSA undertakes field research to arrest the root cause and its impact influences the family health economics specially in inaccessible areas. We found nutritional deficiencies, Lack of basic health awareness, unhygienic village environment and lack of access to Govt health facilities make people vulnerable to different diseases. Infants, children and women are much affecting. Improvements of those three aspects are overarching goals of AFSA health initiatives. AFSA follows two-fold approach that includes both preventive and curative services leveraging traditional knowledge in medicines and healing practices.</p>
            </div>
            {/* Preventive:- */}
            <div className="relative flex flex-col md:flex-row w-full py-4 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">

                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>
                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Preventive:-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        AFSA has organised several Trainings & Campaigns with the technical support of local hospitals. The trainings programmes were organised differently for School & College Children, Women, Aged, Working Professionals at different places of Jajpur, Cuttack and Khurda Districts of Orissa. Nearly 1000 participants had attended programs organised across odisha. Motivated children demonstrate best hygienic practices and good health behaviour encourages their parents to follow the same.As malaria is endemic in many areas of the state, AFSA takes initiatives measures against this disease.Ensure mosquito nets distribution with the support of health committees, chlorinate wells and advertise government treatment programmes. Public awareness disseminates on Malaria, TB and HIV/AIDS and special campaigns are organised for high-risk group (HRG) to prevent HIV/AIDS.
                    </p>
                </div>


            </div>
            {/* Curative:- */}
            <div className="relative flex flex-col md:flex-row w-full my-3 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">


                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Curative:-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        We provide financial assistance to most deprived (12 patients) for their expensive treatment of critical diseases. In order to ensure that communities can access government health services, we organize interface meet between village health committee and local health service providers to reflect their issues and its solution to resolve. in current year, AFSA organizes 03 blood donation camps with the support of staff from the village primary health centre in remote regions and gathering over 250 units of blood. This campaign now turned into a movement mode.At this point local youth appeal, us to scale our camps where they can donate blood for the needy. AFSA also facilitates government health programs for immunization through the Pulse Polio campaign. Health Committees in villages also push government officials to provide regularbasichealthservices. Field staff of AFSA assists health service providers at community on referral to nearest PHC, CHC, DHH. AFSA organizes health camps and free medicine distribution with the support of local doctors at community and schools for immediate treatment and diagnose at doorsteps and further referral. This year more than 300 patients received free diagnosis services and medicines.<br />
                        To address the nutritional deficiency, we organise series of awareness meeting with nutrition experts and promote kitchen garden interventions with the technical support of local agricultural experts.
                    </p>
                </div>


                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>

            </div>
            {/* Climate Change Action: */}
            <div className="relative flex flex-col md:flex-row w-full py-4 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">

                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>
                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Climate Change Action::-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        AFSA initially starts its work in the district of Jajpur which is a heat prone area because of rapid industrial growth and massive deforestation. Near about more than 250 small, medium and large-scale industries are set up. Excessive heat, Air and Water pollution are major issues that affects day-to-day life of community. Community suffering on those issues instigate AFSA to take some small initiatives against climate change. We realise climate change is a global phenomenon but it is people and communities at the local level that experiences its consequences. In this particular district, we experienced rain deficit monsoon, unseasonal rains have disturbed the crop- cycles that compel farmers to migrate. It is a global issues and whole country badly affected. More than 80% of the Indian population lives in the districts highly vulnerable to extreme weather events. India may lose anywhere around 3-10% of its GDP annually by 2100 and its poverty rate may rise by 3.5% in 2040 due to climate change. India has the world’s highest social cost of carbon. Taking all those concerns in mind AFSA starts some micro initiatives and will try to scale up all our efforts in partnership with different like-minded organizations.<br />

                        We actively promote climate awareness educates communities about climate change to foster knowledge and proactive engagement. We are also organizing campaign to empower youth in higher secondary schools and technical colleges for climate action. In engineering colleges, we propagate green building concept and technology specially with Civil stream. Few students are also trained on green auditing. To promote clean energy we distributed solar home lamps where electricity supply frequently disrupted . Engaging stakeholders from media, academia, Civil Society organizations and policy makers to drive climate action. This year we have undertaken massive community plantation and avenue plantation (approximate 5000 plants) at strategic location by organizing work camps of local youth.<br />
                        AFSA promotes climateresistance crops to increase the yield. Argo clinics are also set up to provide technical support and services to farmers group at ground.
                    </p>
                </div>


            </div>
            {/* Women Empowerment: */}
            <div className="relative flex flex-col md:flex-row w-full my-3 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">


                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Women Empowerment:-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        Working with women folks our realised experiences encourage us to focus women’s sense of self -worth, their right to determine choices, right to access to opportunities and resources, right to have power to control their own lives both within and outside the home and their ability to influence the direction of social change.  Our community-based vigilance committees put their effort to achieve gender equality through equal access to various types of opportunities related to health care, education, domestic work and daily labourers.   We are organising awareness campaigns specially for women mason and construction sector women labour force. Sensitization meeting with contractors/builders to ensure equal pay for equal work and for provision of other additional facilities at work site.  AFSA strongly believed that the education is one the most important means of empowering women with knowledge, skill and self -confidence necessary to participate fully in the development process. From poor economic back groundapproximately 30 nos of girls’ students received financial assistance for their further higher study.  Many merit students are also getting scholarship to continue their study without depending on their family. To keep the thought inclusive development, we formed and strengthen more than 300 women self-help group. Bank linkage and financial literacy training provides to all WSHGs. With an objective of devolution of powers in practice, we sensitised PRI members in our operational area where significant numbers of women leaders are sensitised and play crucial role for their local area development.  Our small efforts impacting locality as girl students drop out rates reduces, increased the no of girl students continue their higher studies, WSHG members are accessing Govt resources and starts their own business and Panchayat body heard the voice of women leaders. Our management team also encourages, influence and advocate before local Govt to ensure the gender focused budget and gender friendly execution of all Govt schemes. Every year AFSA observe the international women empowerment day where women who works for the mission, received award for their exceptional work.
                    </p>
                </div>


                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>

            </div>
            {/* Livelihood and Entrepreneurship */}
            <div className="ps-6 animate__animated animate__fadeIn">

                <h2 className="text-purple-500 text-sm font-semibold text-left sm:text-base md:text-xl lg:text-2xl">
                    Livelihood and Entrepreneurship:-
                </h2>
                <p className='text-justify pe-6 text-white'>To ensure micro level health economics in balance of hard-core Strengthening of SHG, (One SHG Photo) Micro Enterprise Development. (2-3 enterprises photograph) Market linkages to SHG product. (Product sales at market photo) Cluster business facilitation, (cluster products process, hoarding or making photos) Skill training (Skill training photos)

                    To address the livelihood issues of community,AFSA follows its two-fold livelihood strategy. One is ‘self-employment’ where we promote entrepreneurship ecosystem across our operational area.  The next one is ‘job employment’ under this strategy; we identify potential youth then trained them on industrial demand driven trades and place them at different potential employers. Career counselling by experienced professionals in engineering collages and linked them with employers also an initiative undertaken to support the passed-out students who are more interested for job placements.  Under the self-employment strategy, we conduct general EDP and trade based EDP to enhance the knowledge of people on business management and high degree of motivation towards entrepreneurship. In collaboration with different universities and colleges AFSA set up incubation centres and Entrepreneurship Park where local youth are getting support and services to start their own enterprises.<br />

                    We use and disseminate the slogan “Job seeker turn into job creator”. AFSA not only provide training but also support the trained candidates in conducting market survey, preparing business development plan, minimum registration formalities and linkage to different banks. Nos of women led social enterprises are established and getting mentoring and linkage support from AFSA.<br />

                    Our promoted entrepreneurs have engaged with different farm, off-farm and non-farm-based enterprises. Different business manages in two forms i.e‘Cluster business’ where SHG members are making their product individually but procuring raw materials and market their product in bulk with negotiated traders. ‘Individual business’ where entrepreneurs are deals their business individually.</p>
            </div>
            {/* Cluster business approach: */}
            <div className="ps-6 animate__animated animate__fadeIn">

                <h2 className="text-purple-500 text-sm font-semibold text-left sm:text-base md:text-xl lg:text-2xl">
                    Cluster business approach:-
                </h2>
                <p className='text-justify pe-6 text-white'>Stone carving cluster – Mega cluster approach is a Drive to scale up the infrastructural and production chain at stone carving clusterswhich have remained unorganized and have not kept pace with the modernization and development that have been taking place so far.  Consequently, there has not been any addition of fresh impetus of development and optimum realization of output in the stone carving business, which is not only the backbone of long traditional heritage and cultural linkages.<br />

                    Dress designing cluster – The prospects of this sector lie in infrastructural up gradation, modernization of the machinery and product diversification. Innovative manufacturing as well as designing expertise, furthered by brand building of the native products hold the key to creating a niche market for the products manufactured by the clusters.  The objective of this program is to support for up gradation of infrastructural facilities coupled with market linkages and product diversification. Keeping in view the fact that the export value realization of products is quite high, integrated infrastructure development has been the policy focus in recent times. The multiplicity in production in tiny units along with geographical wide spread base has resulted into higher level of levies marring the competitiveness in international market. Thus, addressing the problem of infrastructure bottlenecks by suggesting continuation of the sector specific infrastructure schemes has been the focus of attention. Technology Up gradation, Product Diversification, Raw Material Bank, Common Facility centre (CFC), Resource centre, Market Development such as Forward & Backward Linkages, Human Resource & Skill Development, Social Security, Physical Infrastructure are facilitated by AFSA.<br />



                    AFSA focuses on empowering the tribal as well as the non-tribal falls under below poverty line enabling them to enhance their food security, increase their incomes and improve their overall quality of life through natural resource based on the principles of improved watershed management with environmentally sound agricultural practices through off-farm/non-farm enterprise development.</p>
            </div>
            {/* Livelihoods Off-farm sector interventions */}
            <div className="ps-6 animate__animated animate__fadeIn">

                <h2 className="text-purple-500 text-sm font-semibold text-left sm:text-base md:text-xl lg:text-2xl">
                    Livelihoods Off-farm sector interventions:-
                </h2>
                <p className='text-justify pe-6 text-white'>The contribution of off-farm sector to rural economy is tremendous. Specially goat rearing, poultry, duck farming, dairy farm, and fishery activities are supporting the livelihood system a lot to the poorest families in rural areas. In spite of its livelihood contribution and contribution to the livestock economy, this sub-sector received only diminutive attention.  The outcome of this initiative of AFSA is SC and ST women rearing small ruminants have increased their better understanding and able to express their needs and interest before Govt. People are access knowledge on improved practices and better animal health services through diverse extension mechanism. Responsive cadre of animal health workers have promoted within the locality who extend their support. Poorest lands less families are able to add their family income from this additional source.</p>
            </div>
            {/* Farm sector interventions */}
            <div className="relative flex flex-col md:flex-row w-full py-4 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">

                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>
                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Farm sector interventions:-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        AFSA carrying a campaign title “saves seeds”. The core objective of this campaign is to collect, preserve and promote variety of pulses, paddy, millet and cereal that are in endangering stages. AFSA has developed demonstration field for encouragement with knowledge sharing of farmers and further replication. Promoted seeds are in details (Photos with small descriptions).  Apart from that, nos of farmers clubs are formed in covering of 3 districts, Jajpur, Khurda and Cuttack where farmers are getting updating knowledge on different advanced farming technologies and encouraged them for organic farming of vegetables. AFSA organises women farmers club especially for dissemination of benefits of organic farm produces and orient them on modern farming system thorough our agro clinic services.
                    </p>
                </div>


            </div>
            {/* WASH (Water, Sanitation and Hygiene:Awareness, IEC, Individual toilets.  */}
            <div className="relative flex flex-col md:flex-row w-full my-3 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">


                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            WASH (Water, Sanitation and Hygiene:Awareness, IEC, Individual toilets):-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        Working with women folks our realised experiences encourage us to focus women’s sense of self -worth, their right to determine choices, right to access to opportunities and resources, right to have power to control their own lives both within and outside the home and their ability to influence the direction of social change.  Our community-based vigilance committees put their effort to achieve gender equality through equal access to various types of opportunities related to health care, education, domestic work and daily labourers.   We are organising awareness campaigns specially for women mason and construction sector women labour force. Sensitization meeting with contractors/builders to ensure equal pay for equal work and for provision of other additional facilities at work site.  AFSA strongly believed that the education is one the most important means of empowering women with knowledge, skill and self -confidence necessary to participate fully in the development process. From poor economic back groundapproximately 30 nos of girls’ students received financial assistance for their further higher study.  Many merit students are also getting scholarship to continue their study without depending on their family. To keep the thought inclusive development, we formed and strengthen more than 300 women self-help group. Bank linkage and financial literacy training provides to all WSHGs. With an objective of devolution of powers in practice, we sensitised PRI members in our operational area where significant numbers of women leaders are sensitised and play crucial role for their local area development.  Our small efforts impacting locality as girl students drop out rates reduces, increased the no of girl students continue their higher studies, WSHG members are accessing Govt resources and starts their own business and Panchayat body heard the voice of women leaders. Our management team also encourages, influence and advocate before local Govt to ensure the gender focused budget and gender friendly execution of all Govt schemes. Every year AFSA observe the international women empowerment day where women who works for the mission, received award for their exceptional work.
                    </p>
                </div>


                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>

            </div>
            {/* Cross cutting issue-based Interventions */}
            <div className="relative flex flex-col md:flex-row w-full py-4 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">

                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>
                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Cross cutting issue-based Interventions:-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        Community Based Disaster Preparedness CBDP: Support to NGOs for contingency plan.<br /><br />

                        Ourexperienced staff given technical guidance to CBOs and other NGOS of our network in preparing contingency plan in the costal belt of Odisha.  The objective of this plan is to make awarethe community about risk factors and strategy to minimiselosses during disaster. Explore the community-based knowledge, information, skill and use them in different form that helps community to minimise lossesandmake them prepared to cope up of the post disaster situation.
                    </p>
                </div>


            </div>
            {/* Forest and Environment: Plantation.  */}
            <div className="relative flex flex-col md:flex-row w-full my-3 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">


                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Forest and Environment: Plantation. :-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        AFSA observes “Banamahotshab”and undertakes plantation programs. Organization encourages forest fringe community to follow echo-harvesting methods for collection of non-timber forest products to protect the forest. Promote forest protection committees to sustain the village forests. Play a vital role in coordination among community, VSS, PRI and forest department officials.
                    </p>
                </div>


                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>

            </div>

            {/* Governance: PRI Training.  Micro planning */}
            <div className="relative flex flex-col md:flex-row w-full my-3 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">

                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>
                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Governance: PRI Training.  Micro planning:-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        AFSAbelieves on the thought that unless devolution of power of PRI put in practice, socio economic development of rural people will not be possible. Organisation imparts series of sensitization training to empower PRIs. The effect of our empowerment process is significant number of women leaders come forward and contest in Panchayat elections. People attendances increased in Gram sabha and Palli sabha. AFSA assists panchayat to facilitate micro plan with maximum participation of villagers where people make their plan with propose budget according to their prioritize needs. Provides technical assistance to GPs by ensuring participation of govt department’s staff and make the micro plan more effective.
                    </p>
                </div>


            </div>

            {/* Consulting Services */}
            <div className="relative flex flex-col md:flex-row w-full py-3 bg-custom-blue shadow-sm overflow-hidden ps-6 pe-6 border md:border-0 border-gray-300 rounded-lg">


                <div className="p-6 items-center">
                    <h4 className="mb-2 text-green-500 text-left text-xl font-semibold hover:text-teal-400 transition duration-300 ease-in-out transform hover:scale-105 group">
                        <span className="relative">
                            Consulting Services:-
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </h4>
                    <p className="mb-8 text-white text-justify leading-normal font-light text-sm sm:text-base md:text-lg lg:text-lg">
                        In considering the need and demand of local NGOs, AFSA has established one consulting cell where some regular and part time experienced consultants are providing consulting services to local NGOs. The key services are digital identity across glob, fund raising initiatives, consortium proposal writing, program strategy development; innovative model development, monitoring and evaluation, research and documentation of best practices and capacity building of work force.
                    </p>
                </div>


                <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="card-image"
                        className="h-full w-full rounded-md md:rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>

            </div>
            {/* OUR PARTNERS */}
            <div className="bg-custom-blue py-12">
                <h2 className="text-white text-3xl font-extrabold text-center pb-10">Our Partners</h2>
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">


                        <div className="bg-gray-400 p-6 rounded-lg shadow-lg flex flex-col items-center w-48 mb-6 sm:mb-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:rotate-3deg animate-fade-in">
                            <img src={kgi} alt="Client 1 Logo" className="h-16 w-16 mb-2 rounded-full" />
                            <p className="text-sm font-bold text-center text-custom-blue">Kalinga Group of Institutions (KGI)</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurWork;

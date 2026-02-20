import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { lecturingServices } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, link }) => {
    const content = (
        <div
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ${link ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
        >
            <img src={icon} alt="web-development" className="w-48 h-48 object-contain" loading="lazy" />

            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
    );

    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                {link ? (
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                    >
                        {content}
                    </a>
                ) : (
                    content
                )}
            </motion.div>
        </Tilt>
    );
};

const Lecturing = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Managhement College</p>
                <h2 className={styles.sectionHeadText}>Tech & Safety Lecturing</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                An expeienced multi-disciplinary systems manager, who is a Lecturer at the Dep. of Safety at the management college.<br></br>
                Teaching various courses related to safety, risk management, and emergency response.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {lecturingServices.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

const WrappedLecturing = SectionWrapper(Lecturing, 'lecturing');

export default WrappedLecturing;

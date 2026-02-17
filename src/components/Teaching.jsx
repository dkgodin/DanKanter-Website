import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { teachingServices } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img src={icon} alt="web-development" className="w-48 h-48 object-contain" loading="lazy" />

                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
);

const Teaching = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>School Science and Math</p>
                <h2 className={styles.sectionHeadText}>Teaching</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                A Creative Teacher, who knows how to blend frontal teaching with laboratories & various exercises.<br></br>
                Administering students for different science competitions and more.<br></br>
                Soon to be grauating a Teaching degree (which will be my 4th degree).
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {teachingServices.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

const WrappedTeaching = SectionWrapper(Teaching, 'teaching');

export default WrappedTeaching;

import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { teachingServices } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { useScrollLock } from '../utils/scrollLock';

const ServiceCard = ({ index, title, icon, link, onClick }) => {
    const isClickable = Boolean(link || onClick);

    const content = (
        <div
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ${
                isClickable ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''
            }`}
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
                onClick={onClick}
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

const Teaching = () => {
    const [previewImage, setPreviewImage] = React.useState(null);

    const handleClosePreview = () => setPreviewImage(null);

    useScrollLock(Boolean(previewImage));

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
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                        onClick={() => setPreviewImage(service.icon)}
                    />
                ))}
            </div>

            {previewImage && (
                <div
                    className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 px-4 pt-24 pb-6 min-h-[100dvh] min-w-full overflow-auto overscroll-contain"
                    onClick={handleClosePreview}
                >
                    <div
                        className="relative flex flex-col items-center justify-center max-h-[calc(100dvh-7rem)] max-w-[min(90vw,48rem)] w-full bg-tertiary rounded-2xl p-4 pt-16 box-border"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={handleClosePreview}
                            className="absolute top-3 right-3 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white text-black text-2xl leading-none font-light hover:bg-white/90 active:bg-white/80 touch-manipulation shadow-lg"
                            aria-label="Close image preview"
                        >
                            ×
                        </button>
                        <img
                            src={previewImage}
                            alt="Teaching tech stack preview"
                            className="max-h-[calc(100dvh-11rem)] max-w-full w-auto h-auto object-contain rounded-xl"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

const WrappedTeaching = SectionWrapper(Teaching, 'teaching');

export default WrappedTeaching;

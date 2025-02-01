import { useState } from 'react';
import FAQStyle from '../styles/FAQ.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={FAQStyle.container}>
            <div className={FAQStyle.componentHeader}>
                <img src="/Bubble.png" alt="Bubble" className={FAQStyle.leftImage} />
                <h1>FAQ</h1>
                <img src="/Chat.png" alt="Chat" className={FAQStyle.rightImage} />
            </div>
            <div className={FAQStyle.faqContainer}>
                <div className={FAQStyle.box}>
                    <div className={FAQStyle.question} onClick={() => toggleFAQ(0)}>
                        <span>Apa saja persyaratan untuk berpartisipasi di Hackathon?</span>
                        <FontAwesomeIcon icon={activeIndex === 0 ? faChevronUp : faChevronDown} />
                    </div>
                    {activeIndex === 0 && <div className={FAQStyle.answer}>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</div>}
                </div>
                <div className={FAQStyle.box}>
                    <div className={FAQStyle.question} onClick={() => toggleFAQ(1)}>
                        <span>Berapa biaya pendaftaran Hackathon? Kapan batas waktu pendaftaran?</span>
                        <FontAwesomeIcon icon={activeIndex === 1 ? faChevronUp : faChevronDown} />
                    </div>
                    {activeIndex === 1 && <div className={FAQStyle.answer}>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</div>}
                </div>
                <div className={FAQStyle.box}>
                    <div className={FAQStyle.question} onClick={() => toggleFAQ(2)}>
                        <span>Jika tidak memiliki dasar pemrograman dan desain, bolehkah saya berpartisipasi?</span>
                        <FontAwesomeIcon icon={activeIndex === 2 ? faChevronUp : faChevronDown} />
                    </div>
                    {activeIndex === 2 && <div className={FAQStyle.answer}>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</div>}
                </div>
                <div className={FAQStyle.box}>
                    <div className={FAQStyle.question} onClick={() => toggleFAQ(3)}>
                        <span>Apa syarat pengembalian biaya pendaftaran?</span>
                        <FontAwesomeIcon icon={activeIndex === 3 ? faChevronUp : faChevronDown} />
                    </div>
                    {activeIndex === 3 && <div className={FAQStyle.answer}>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</div>}
                </div>
                <div className={FAQStyle.box}>
                    <div className={FAQStyle.question} onClick={() => toggleFAQ(4)}>
                        <span>Jika saya memiliki pertanyaan, siapa yang dapat saya hubungi?</span>
                        <FontAwesomeIcon icon={activeIndex === 4 ? faChevronUp : faChevronDown} />
                    </div>
                    {activeIndex === 4 && <div className={FAQStyle.answer}>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</div>}
                </div>
            </div>
        </div>
    );
};

export default FAQ;

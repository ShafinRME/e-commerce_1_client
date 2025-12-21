import React, { useState } from 'react';

const FAQ = () => {
    // Track which accordion is open
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div data-aos="zoom-out" data-aos-offset="300" data-aos-duration="2500" className="flex flex-col gap-4 w-15/16 mx-auto my-12 p-4">
            <h1 className='text-5xl text-base-200 font-bold text-center mt-4 mb-4'>Frequently Asked Question (FAQ)</h1>
            <p className='text-accent font-semibold w-2/3 mx-auto text-center mb-6 mt-4'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>

            <div
                className={`collapse collapse-arrow ${openIndex === 0 ? 'bg-[#EAECED] text-base-200 border border-base-200' : 'bg-base-100 border border-base-300'}`}
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                data-aos={openIndex === null ? "fade-right" : ""}
                data-aos-offset="300"
                data-aos-duration="500"
            >
                <input type="radio" name="my-accordion-2" defaultChecked={openIndex === 0} readOnly />
                <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                <div className="collapse-content text-sm">
                    <hr className="w-full border-solid border-accent border-t-2 opacity-30 mb-4" />
                    A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: it gently aligns your shoulders and back, helping you to stay mindful of your posture and avoid slouching.
                </div>
            </div>

            <div
                className={`collapse collapse-arrow ${openIndex === 1 ? 'bg-[#EAECED] text-base-200 border border-base-200' : 'bg-base-100 border border-base-300'}`}
                onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                data-aos={openIndex === null ? "fade-left" : ""}
                data-aos-offset="300"
                data-aos-duration="500"
            >
                <input type="radio" name="my-accordion-2" defaultChecked={openIndex === 1} readOnly />
                <div className="collapse-title font-semibold">Is it suitable for all ages and body types?</div>
                <div className="collapse-content text-sm">
                    <hr className="w-full border-solid border-accent border-t-2 opacity-30 mb-4" />
                    Yes, the posture corrector is designed to be adjustable and can be used by individuals of all ages and body types. Whether you're a teenager or an adult, it can help provide the necessary support for optimal posture.
                </div>
            </div>

            <div
                className={`collapse collapse-arrow ${openIndex === 2 ? 'bg-[#EAECED] text-base-200 border border-base-200' : 'bg-base-100 border border-base-300'}`}
                onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                data-aos={openIndex === null ? "fade-right" : ""}
                data-aos-offset="300"
                data-aos-duration="500"
            >
                <input type="radio" name="my-accordion-2" defaultChecked={openIndex === 2} readOnly />
                <div className="collapse-title font-semibold">Does it really help with back pain and posture improvement?</div>
                <div className="collapse-content text-sm">
                    <hr className="w-full border-solid border-accent border-t-2 opacity-30 mb-4" />
                    Yes, the posture corrector is designed to provide support that alleviates back pain caused by poor posture. By promoting better posture, it encourages your spine to align properly, which can result in long-term improvements in posture and reduction of back pain.
                </div>
            </div>

            <div
                className={`collapse collapse-arrow ${openIndex === 3 ? 'bg-[#EAECED] text-base-200 border border-base-200' : 'bg-base-100 border border-base-300'}`}
                onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
                data-aos={openIndex === null ? "fade-left" : ""}
                data-aos-offset="300"
                data-aos-duration="500"
            >
                <input type="radio" name="my-accordion-2" defaultChecked={openIndex === 3} readOnly />
                <div className="collapse-title font-semibold">How will I be notified when the product is back in stock?</div>
                <div className="collapse-content text-sm">
                    <hr className="w-full border-solid border-accent border-t-2 opacity-30 mb-4" />
                    You can sign up for notifications on the product page. Once the product is back in stock, you will receive an email or a push notification informing you that it's available for purchase again.
                </div>
            </div>
        </div>
    );
};

export default FAQ;

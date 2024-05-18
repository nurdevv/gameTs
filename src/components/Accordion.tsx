import {FunctionComponent, useState} from 'react';

import {AccordionData, data} from './AccordionData.ts';

const Accordion: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(null);

    const toggleOpen = (i: null | number) => {
        if (isOpen === i) {
            return setIsOpen(null)
        }

        // @ts-ignore
        setIsOpen(i)
    }

    return (
        <div className="pages-content">
            <div className="accordion">
                <div className="title">Feed Hachiko different foods and wait until she goes to the litter box to poop,
                    then exchange the poop for TON tokens🐾
                </div>
                {
                    data.map((item: AccordionData, i: number | null) => (
                        <div className='item'>
                            <div className="sub-title" onClick={() => toggleOpen(i)}>
                                <h2>{item.subtitle}</h2>
                                <span>{isOpen === i ? '-' : '+'}</span>
                            </div>
                            <div className={isOpen === i ? 'content show' : 'content'}>{item.answer}</div>
                            <div className={isOpen === i ? 'content show' : 'content'}>{item.answer2}</div>
                            <div className={isOpen === i ? 'content show' : 'content'}>{item.answer3}</div>
                            <div className={isOpen === i ? 'content show' : 'content'}>{item.answer4}</div>
                            <div className={isOpen === i ? 'content show' : 'content'}>{item.answer5}</div>
                        </div>
                    ))
                }

                <p className='acc-endText'>To stay up to date with news, subscribe to our channel and chat</p>
            </div>
            <div className='box'></div>
        </div>
    );
};

export default Accordion;
import React from 'react';

const ProjectTimeline = () => {
  return (
    <nav>
        {/* position on the timeline */}
        <div className="marker"></div>
        
        {/* draggable element */}
        <div className="nav-track" data-draggable>
            <ul className="nav-list">
                <li>
                    <a href="#section_1" className='nav__link' data-link><span>Site Vitrine</span></a>
                </li>
                <li>
                    <a href="#section_2" className='nav__link' data-link><span>Foodtruck</span></a>
                </li>
                <li>
                    <a href="#section_3" className='nav__link' data-link><span>E-Commerce</span></a>
                </li>
                <li>
                    <a href="#section_4" className='nav__link' data-link><span>Blog</span></a>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default ProjectTimeline;

import styled from "styled-components";

export const NavProjects = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    background: var(--navBgColor);
	color: var(--blanc-casse);
	height: 6rem;
	
	&::after {
		content: '';
		position: absolute;
		top: 1.7rem;
		left: 0;
		width: 100%;
		height: 0.25rem;
		background: currentColor;
		pointer-events: none;
	}

    .nav__track {
        position: relative;
        min-width: max(200rem, 200%);
        padding: 1.5rem max(100rem, 100%) 0 0;
        height: 6rem;
    }

    .nav__list {
        list-style: none;
        margin: 0;
        padding: 0;
        
        display: flex;
        justify-content: space-between;
        color: var(--blanc-casse);

    }
`;

export const TimelineLink = styled.a`
    position: relative;
    display: block;
    min-width: 8rem;
    padding: 2.25rem 1rem 0.5rem;
    text-align: center;
    color: inherit;
    text-decoration: none;
    z-index: 1;
    transition: color 150ms;
    
    &:hover,
    &:focus {
        color: var(--teal-blue);
        text-decoration: underline;
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 0.65rem;
        height: 0.65rem;
        background-color: currentColor;
        border-radius: 50%;
        transform: translate3d(-50%, 0, 0);
        transform-origin: center center;
    }
    
    span {
        display: block;
        transition: transform 200ms;
    }
    
    &.is-active {
        span {
            transform: scale(1.4);
            color: var(--teal-blue);
        }
        
        &::after {
            display: none;
        }
    }
`;

export const Marker = styled.div`
    position: fixed;
    top: 1.75rem;
    left: 4rem;
    width: 1rem;
    height: 1rem;
    transform: translate3d(-50%, -50%, 0);
	background: var(--teal-blue);
	border-radius: 100%;
	z-index: 2000;

    &::before {
		content: '';
		position: absolute;
		top: calc(50% - 0.2rem);
		right: 100%;
		width: 4rem;
		height: 0.4rem;
		background-color: var(--teal-blue);
	}
`;


export const ProjectsContainer = styled.div`
    position: absolute;
`;

export const SectionPart = styled.main`
    
`;

export const ProjectSection = styled.section`

    height: 100vh;
    width: 100vw;
    padding: 8rem 0 max(5vh, 2rem);
    display: flex;
    justify-content: center;
    align-items: center;
	background-color: var(--bg-color);

    &:nth-child(2n+0){
        background-color: var(--blanc-casse);
    }
`;
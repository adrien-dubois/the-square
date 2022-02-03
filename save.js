if (mq.matches) {
    tl.from(
      el.childNodes[0],

      {
        x: -300,
        opacity: 0,
        duration: 2,

        ease: "power2",
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: "top center+=200",
          end: "bottom bottom-=100",
          scrub: true,
          snap: true,
          //
          // toggleActions: "play none none reverse",
        },
      }
    )
      .to(el.childNodes[1], {
        transform: "scale(0)",

        ease: "power2.inOut",

        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el.childNodes[1],
          start: "top center",
          end: "bottom center",
          scrub: true,
          snap: true,

          // toggleActions: "play none none reverse",
        },
      })
      .from(
        el.childNodes[2],

        {
          y: 400,

          duration: 2,

          ease: "power2",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            end: "bottom bottom-=200",
            scrub: true,
            snap: true,
            //
            // toggleActions: "play none none reverse",
          },
        }
      )
      .to(
        el,

        {
          opacity: 0,

          ease: "power2",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top top+=300",
            end: "center top+=300",
            scrub: true,
          },
        }
      );
  } else {
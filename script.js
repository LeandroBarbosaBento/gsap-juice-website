const tl = gsap.timeline({scrollTrigger: {
    trigger: ".flavour",
    start: "0% 95%",
    end: "90% 10%",
    scrub: true,
    markers: true,
}})

tl.to("#bottle-strawberry", {
    top: "172%",
    left: "26.5%",
    width: "18%",
}, "one")


tl.to("#bottle-mango", {
    top: "172%",
    left: "60%",
    width: "18%",
}, "one")

tl.to("#bottle-berry", {
    top: "170%",
    left: "-8.5%",
    width: "20%",
}, "one")

















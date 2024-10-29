const tl = gsap.timeline({scrollTrigger: {
    trigger: ".flavour",
    start: "0% 95%",
    end: "90% 10%",
    scrub: true,
    markers: false,
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

tl.to("#strawberry", {
    top: "183%",
    left: "26.5%",
    width: "5%",
}, "one")


tl.to("#mangoslice", {
    top: "185%",
    left: "60%",
    width: "5%",
}, "one")

tl.to("#berry", {
    top: "184%",
    left: "-8.5%",
    width: "5%",
}, "one")

tl.to("#berry2", {
    top: "120%",
    left: "105%",
    width: "15%",
    rotate: "120deg",
}, "one")

const tl2 = gsap.timeline({scrollTrigger: {
    trigger: ".fresh",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    markers: true,
}})

tl2.to("#bottle-strawberry", {
    top: "207%",
    left: "50%",
    width: "40%",
}, "two")


tl2.to("#bottle-mango", {
    top: "207%",
    left: "55.5%",
    width: "38%",
}, "two")

tl2.to("#bottle-berry", {
    top: "205%",
    left: "45%",
    width: "38%",
}, "two")

tl2.to("#strawberry", {
    top: "245%",
    left: "5%",
    width: "12%",
}, "two")

tl2.to("#mangoslice", {
    top: "235%",
    left: "75%",
    width: "12%",
}, "two")


tl2.to("#berry", {
    top: "230%",
    left: "53%",
    width: "12%",
}, "two")



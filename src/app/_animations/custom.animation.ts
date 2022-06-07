// https://www.thinktecture.com/en/ionic/router-page-transition/
// https://github.com/mhartington/v5-animations
// https://ionicframework.com/docs/utilities/animations

import { AnimationController } from "@ionic/angular";
const animationCtrl = new AnimationController();

// https://github.com/mhartington/v5-animations/blob/master/src/app/animations/index.ts
export const getIonPageElement = (element: HTMLElement) => {
    if (element.classList.contains("ion-page")) {
        return element;
    }

    const ionPage = element.querySelector(
        ":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
    );
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};

export const customAnimation = (_: HTMLElement, opts: any) => {
    // create root transition
    const rootTransition = animationCtrl
        .create()
        .duration(400)
        .easing("cubic-bezier(0.7,0,0.3,1)");

    const enterTransition = animationCtrl.create().addElement(opts.enteringEl);
    const exitTransition = animationCtrl.create().addElement(opts.leavingEl);

    enterTransition.fromTo("opacity", "0", "1");
    exitTransition.fromTo("opacity", "1", "0");


    // console.warn("opts", opts)
    // console.warn("enterTransition", enterTransition)
    // console.warn("opts.direction", exitTransition)

    // console.warn("enterTransition", enterTransition)

    if (opts.direction === "forward") {
        enterTransition.fromTo("transform", "translateX(-1.5%)", "translateX(0%)");
        exitTransition.fromTo("transform", "translateX(0%)", "translateX(1.5%)");
    } else {
        enterTransition.fromTo("transform", "translateX(1.5%)", "translateX(0%)");
        exitTransition.fromTo("transform", "translateX(0%)", "translateX(-1.5%)");
    }

    rootTransition.addAnimation([enterTransition, exitTransition]);
    return rootTransition;
};


export const modalEnterAnimation = (baseEl: any) => {
    const backdropAnimation = animationCtrl
        .create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', '0.9')
        .duration(200);

    const wrapperAnimation = animationCtrl
        .create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .delay(200)
        .keyframes([
            { offset: 0, opacity: '0', transform: 'scale(0)' },
            { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ])
        .duration(250);

    return animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
export const modalLeaveAnimation = (baseEl: any) => {
    return modalEnterAnimation(baseEl).direction('reverse');
};

import { defineComponent, h, VNode, ref, watch, onMounted } from "vue";
import "./style.css";
import { Props } from "./interfaces";

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    width: {
      type: String,
      default: "300px",
      required: false,
    },
    height: {
      type: String,
      default: "auto",
      required: false,
    },
    title: {
      type: String,
      default: "",
      required: false,
    },
    titleSecondary: {
      type: String,
      default: "",
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    dark: {
      type: Boolean,
      default: false,
      required: false,
    },
    noCloseButton: {
      type: Boolean,
      default: false,
      required: false,
    },
    closeAnywhere: {
      type: Boolean,
      default: false,
      required: false,
    },
    loaderColor: {
      type: String,
      default: "#be2626",
      required: false,
    },
  },
  emits: ["update:modelValue", "update:loading", "close-modal"],
  setup(
    props: Props,
    {
      slots,
      emit,
    }: {
      slots: Record<string, () => VNode[]>;
      emit: (event: string, ...args: any[]) => void;
    }
  ) {
    const showModal = ref(props.modelValue);
    watch(
      () => props.modelValue,
      (newValue: boolean) => {
        showModal.value = newValue;
      }
    );
    const loadingChanged = ref(false);
    onMounted(() => {
      const colorLoader = document.documentElement.style;
      colorLoader.setProperty("--color-loader-beauti", props.loaderColor!);
    });
    watch(
      () => props.loaderColor,
      (newValue: string | undefined) => {
        const colorLoader = document.documentElement.style;
        colorLoader.setProperty("--color-loader-beauti", newValue!);
      }
    );
    watch(
      () => props.loading!,
      (newValue: Boolean, oldValue: Boolean) => {
        if (oldValue === true && newValue === false) {
          loadingChanged.value = true;
        }
      }
    );

    const handleCloseModal = () => {
      loadingChanged.value = false;
      emit("update:modelValue", false);
      emit("close-modal");
      setTimeout(() => {
        emit("update:loading", true);
      }, 350);
    };
    return () => {
      return h(
        "div",
        {
          class: [
            "beauti__container__class",
            showModal.value ? "beauti__in__anim" : "beauti__out__anim",
          ],
        },
        [
          h(
            "div",
            {
              class: "beauti__background__class",
              onclick: props.closeAnywhere ? handleCloseModal : "",
            },
            ""
          ),
          h("div", { class: "beauti__modal__class" }, [
            h(
              "div",
              {
                class: [
                  "beauti__modal__content__class",
                  showModal.value ? "beauti__modal__in__anim" : "",
                ],
                style: {
                  backgroundColor: props.dark ? "rgb(30, 31, 32)" : "#fff",
                  color: props.dark ? "#fff" : "",
                  width: props.width,
                  height: props.height,
                  transition: "all 0.3s ease",
                },
              },
              [
                h(
                  "div",
                  {
                    class: [
                      "beauti__load__class",
                      !props.loading && loadingChanged.value
                        ? "beauti__modal__out__anim"
                        : "",
                    ],

                    style: {
                      display:
                        !props.loading && !loadingChanged.value ? "none" : "",
                      backgroundColor: props.dark ? "#000000da" : "#ffffffda",
                      width: props.width,
                      height: props.height === "auto" ? "100%" : props.height,
                      maxWidth: "100%",
                      maxHeight: "100%",
                      transition: "all 0.3s ease",
                    },
                  },
                  [
                    h("div", {
                      class: "beauti__loading__pulse__class",
                    }),
                  ]
                ),
                h("div", { class: "beauti__modal__header__class" }, [
                  h("div", {}, [
                    h("div", {}, [
                      h("h2", { title: props.title }, props.title),
                      h(
                        "h2",
                        {
                          title: props.titleSecondary,
                        },
                        props.titleSecondary
                      ),
                    ]),
                  ]),
                  h(
                    "div",
                    {
                      style: {
                        display: props.noCloseButton ? "none" : "block",
                      },
                    },
                    [
                      h(
                        "button",
                        {
                          type: "button",
                          class: "beauti__btn__close__class",
                          onclick: handleCloseModal,
                        },
                        [
                          h(
                            "svg",
                            {
                              width: "10px",
                              height: "10px",
                              viewBox: "0 0 36 36",
                              xmlns: "http://www.w3.org/2000/svg",
                              xmlnsXlink: "http://www.w3.org/1999/xlink",
                              ariaHidden: "true",
                              role: "img",
                              class: "iconify iconify--twemoji",
                              preserveAspectRatio: "xMidYMid meet",
                            },
                            [
                              h("path", {
                                fill: "#FFFFFF",
                                d: "M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.498 2.498 0 0 0-3.535 0a2.498 2.498 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.493 2.493 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267L21.533 18.002z",
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
                h(
                  "div",
                  {
                    class: "beauti__modal__body__class",
                    style: [
                      slots.footer
                        ? { maxHeight: "81%", height: "calc(100% - 80px)" }
                        : { maxHeight: "89%", height: "calc(100% - 42px)" },
                    ],
                  },
                  slots.body ? slots.body() : ""
                ),
                h(
                  "div",
                  {
                    class: "beauti__modal__footer__class",
                    style: [
                      slots.footer ? { maxHeight: "19%", height: "40px" } : {},
                    ],
                  },
                  slots.footer ? slots.footer() : ""
                ),
              ]
            ),
          ]),
        ]
      );
    };
  },
});

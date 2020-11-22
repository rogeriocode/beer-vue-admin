export {};
declare global {
  interface window {
    $: any;
    google: any;
  }
  interface Number {
    format(min: number, max: number): string;
    formatReal(): string;
  }
  interface String {
    toNumber(): string;
  }
  interface Vue {
    http: any;
    $user: any;
  }
}
import { Vue } from "vue-property-decorator";
import { ElMessage } from "element-ui/types/message";
import { ElMessageBoxShortcutMethod } from "element-ui/types/message-box";


declare module "vue/types/vue" {
  interface that {
    remove: any;
  }
  type VForm = Vue & {
    validate: (valid: any) => boolean;
    focus: () => boolean;
    goToday: () => boolean;
    resetFields: () => boolean;
    weekdays: Array<any>;
    moveToTarget: (tag: any) => boolean;
    handleMouseleave: any;
  };
  interface Vue {
    $ELEMENT: any;
    $user: any;
    $real: any;
    $copy: any;
    resToContent: any;
    resToList: any;
    $moment: any;
    moment: any;
    $token: any;
    checkPermission: any;
    checkRolePermission: any;
    goToPage: any;
    changePageSize: any;
    $error: any;
    $event: Vue;
    $message: ElMessage;
    $confirm: ElMessageBoxShortcutMethod;
    save: any;
    update: any;
  }

  interface VueConstructor {
    $moment: any;
  }
}

import {
  Alert,
  Aside,
  Autocomplete,
  Avatar,
  Backtop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Image,
  InfiniteScroll,
  Input,
  InputNumber,
  Link,
  Loading,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Notification,
  Option,
  OptionGroup,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Row,
  Select,
  Slider,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  TimePicker,
  TimeSelect,
  Timeline,
  TimelineItem,
  Tooltip,
  Transfer,
  Upload,
} from "element-ui";

export default {
  install(Vue:any) {
    Vue.component(Alert.name, Alert);
    Vue.component(Aside.name, Aside);
    Vue.component(Autocomplete.name, Autocomplete);
    Vue.component(Avatar.name, Avatar);
    Vue.component(Backtop.name, Backtop);
    Vue.component(Badge.name, Badge);
    Vue.component(Breadcrumb.name, Breadcrumb);
    Vue.component(BreadcrumbItem.name, BreadcrumbItem);
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Calendar.name, Calendar);
    Vue.component(Card.name, Card);
    Vue.component(Carousel.name, Carousel);
    Vue.component(CarouselItem.name, CarouselItem);
    Vue.component(Cascader.name, Cascader);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(CheckboxButton.name, CheckboxButton);
    Vue.component(CheckboxGroup.name, CheckboxGroup);
    Vue.component(Col.name, Col);
    Vue.component(Collapse.name, Collapse);
    Vue.component(CollapseItem.name, CollapseItem);
    Vue.component(ColorPicker.name, ColorPicker);
    Vue.component(Container.name, Container);
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(Dialog.name, Dialog);
    Vue.component(Divider.name, Divider);
    Vue.component(Drawer.name, Drawer);
    Vue.component(Dropdown.name, Dropdown);
    Vue.component(DropdownItem.name, DropdownItem);
    Vue.component(DropdownMenu.name, DropdownMenu);
    Vue.component(Footer.name, Footer);
    Vue.component(Form.name, Form);
    Vue.component(FormItem.name, FormItem);
    Vue.component(Header.name, Header);
    Vue.component(Icon.name, Icon);
    Vue.component(Image.name, Image);
    Vue.component(InfiniteScroll.name, InfiniteScroll);
    Vue.component(Input.name, Input);
    Vue.component(InputNumber.name, InputNumber);
    Vue.component(Link.name, Link);
    Vue.component(Main.name, Main);
    Vue.component(Menu.name, Menu);
    Vue.component(MenuItem.name, MenuItem);
    Vue.component(MenuItemGroup.name, MenuItemGroup);
    Vue.component(Message.name, Message);
    Vue.component(MessageBox.name, MessageBox);
    Vue.component(Notification.name, Notification);
    Vue.component(Option.name, Option);
    Vue.component(OptionGroup.name, OptionGroup);
    Vue.component(PageHeader.name, PageHeader);
    Vue.component(Pagination.name, Pagination);
    Vue.component(Popconfirm.name, Popconfirm);
    Vue.component(Popover.name, Popover);
    Vue.component(Progress.name, Progress);
    Vue.component(Radio.name, Radio);
    Vue.component(RadioButton.name, RadioButton);
    Vue.component(RadioGroup.name, RadioGroup);
    Vue.component(Rate.name, Rate);
    Vue.component(Row.name, Row);
    Vue.component(Select.name, Select);
    Vue.component(Slider.name, Slider);
    Vue.component(Step.name, Step);
    Vue.component(Steps.name, Steps);
    Vue.component(Submenu.name, Submenu);
    Vue.component(Switch.name, Switch);
    Vue.component(TabPane.name, TabPane);
    Vue.component(Table.name, Table);
    Vue.component(TableColumn.name, TableColumn);
    Vue.component(Tabs.name, Tabs);
    Vue.component(Tag.name, Tag);
    Vue.component(TimePicker.name, TimePicker);
    Vue.component(TimeSelect.name, TimeSelect);
    Vue.component(Timeline.name, Timeline);
    Vue.component(TimelineItem.name, TimelineItem);
    Vue.component(Tooltip.name, Tooltip);
    Vue.component(Transfer.name, Transfer);
    Vue.component(Upload.name, Upload);


    Vue.prototype.$confirm = MessageBox;
    Vue.prototype.$message = Message;
    Vue.prototype.$notify = Notification;


    Vue.use(Loading);
  },
};

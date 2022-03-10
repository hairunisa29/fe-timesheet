import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import lockFill from "@iconify/icons-eva/lock-fill";
import personAddFill from "@iconify/icons-eva/person-add-fill";


// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard/admin",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "Employee",
    path: "/dashboard/employee",
    icon: getIcon(peopleFill),
  },
  {
    title: "timesheet",
    path: "/dashboard/timesheet",
    icon: getIcon(fileTextFill),
  },
  {
    title: "Dashboard Karyawan",
    path: "/dashboard/karyawan",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "Delivery Performance",
    path: "/dashboard/deliveryperformance",
    icon: getIcon(lockFill),
  },
  {
    title: "Upload File",
    path: "/dashboard/uploadfile",
    icon: getIcon(personAddFill),
  },
];

export default sidebarConfig;

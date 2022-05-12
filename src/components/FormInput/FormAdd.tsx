import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  department_list_request,
  department_list_success,
  department_list_fail,
} from "../../stores/usersSlice/departmentSlice";
import Loading from "../LoadingError/Loading";
import Error from "../LoadingError/Error";
import departmentApi from "../../services/api/departmentApi";
import userApi from "../../services/api/userApi";
import { useForm, SubmitHandler } from "react-hook-form";

import "./style.css";

interface department {
  name: string;
}
enum GenderEnum {
  male = "Nam",
  female = "male",
}
type InputsForm = {
  username: string;
  email: string;
  gender: GenderEnum;
  address: string;
  password: string;
  phoneNumber: number;
  department: Array<string>;
  role: string;
};
function FormAdd() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<InputsForm>();
  const listDepartment = useSelector((state: any) => state.departmentList);
  const { departments, error, loading } = listDepartment;
  useEffect(() => {
    const fetchApiLisDepartment = async () => {
      try {
        dispatch(department_list_request());

        const data = await departmentApi.getAll();
        dispatch(department_list_success(data));
      } catch (error) {
        const message = "loi khong xac dinh";

        dispatch(department_list_fail(message));
      }
    };
    fetchApiLisDepartment();
  }, [dispatch]);

  //   handle form
  // const handleSubmitForm: SubmitHandler<InputsForm> = async (data) => {
  //   try {
  //     await userApi.add({
  //       username: data.username,
  //       email: data.email,
  //       gender: data.gender,
  //       address: data.address,
  //       password: data.password,
  //       phoneNumber: Number(data.phoneNumber),
  //       department: [data.department],
  //       role: data.role,
  //     });
  //     dispatch(user_create_success());
  //   } catch (error: any) {
  //     const message = error.message;
  //     dispatch(user_list_fail(message));
  //   }
  // };
  return (
    <div className="center">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <h2>Add Employee</h2>
          <div className="form-wrap">
            <form action="">
            {/* <form onSubmit={handleSubmit(handleSubmitForm)}> */}
              <div className="form-group">
                <input type="text" {...register("username")} />
                <span>Username</span>
              </div>
              <div className="form-group">
                <input type="text" {...register("email")} />
                <span>Email</span>
              </div>
              <div className="form-group">
                <select className="form-group__gender" {...register("gender")}>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
              <div className="form-group">
                <input type="number" {...register("phoneNumber")} />
                <span>Phone number</span>
              </div>
              <div className="form-group">
                <input type="text" {...register("address")} />
                <span>Address</span>
              </div>
              <div className="form-group">
                <input type="password" {...register("password")} />
                <span>Set password</span>
              </div>
              <div className="form-group">
                <label htmlFor="">Department</label>
                <select
                  className="form-group__gender"
                  {...register("department")}
                >
                  {departments &&
                    departments.map((department: department, index: number) => (
                      <option key={index} value={department.name}>
                        {department.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Role</label>
                <select className="form-group__gender" {...register("role")}>
                  <option>Admin</option>
                  <option>Employee</option>
                </select>
              </div>

              <div className="form-group form-group__btn">
                <input type="submit" />
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default FormAdd;

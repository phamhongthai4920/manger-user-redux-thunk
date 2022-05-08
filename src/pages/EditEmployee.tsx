import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  department_list_request,
  department_list_success,
  department_list_fail,
} from "../stores/usersSlice/departmentSlice";
import departmentApi from "../services/api/departmentApi";
import Error from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Error";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import {
  user_edit_success,
  user_list_fail,
  user_list_request,
  user_update_reset,
  user_update_success,
} from "../stores/usersSlice/usersSlice";
import userApi from "../services/api/userApi";
import { useNavigate, useParams } from "react-router-dom";
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
  department: any;
  role: string;
};

function EditEmployee() {
  const history = useNavigate();
  const params = useParams();
  const [dataUpdate, setDataUpdate] = useState({});
  const dispatch = useDispatch();

  // get department

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
  const listDepartment = useSelector((state: any) => state.departmentList);
  const { departments } = listDepartment;

  // edit product
  const userEdit = useSelector((state: any) => state.userList);
  const { loading, error, users, success } = userEdit;
  useEffect(() => {
    const fetchApiEdit = async () => {
      try {
        const data = await userApi.get(params.id);
        dispatch(user_edit_success(data));
      } catch (error: any) {
        const message = error.message;
        dispatch(user_list_fail(message));
      }
    };
    fetchApiEdit();
  }, [params.id, dispatch]);

  useEffect(() => {
    const fetchApiUpdate = async () => {
      try {
        dispatch(user_list_request);

        const data = await userApi.update(dataUpdate);

        dispatch(user_update_success(data));
        history("/");
        dispatch(user_edit_success(data));
      } catch (error: any) {
        const message = error.message;

        user_list_fail(message);
      }
    };
    fetchApiUpdate();
  }, [dispatch, dataUpdate]);
  const { register, handleSubmit, reset } = useForm<InputsForm>({
    defaultValues: {
      username: "",
      // email: "",
      // gender: "",
      // address: "",
      // password: "",
      // phoneNumber: "",
      // department: "",
      // role: "",
    },
  });
  useEffect(() => {
    if (success) {
      dispatch(user_update_reset);
    } else {
      let defaults = {
        username: users.username,
        email: users.email,
        gender: users.gender,
        address: users.address,
        password: users.password,
        phoneNumber: users.phoneNumber,
        department: users.department,
        role: users.role,
      };
      reset(defaults);
    }
  }, [users, params.id, reset]);

  const handleSubmitForm = (data: InputsForm) => {
    setDataUpdate({
      id: params.id,
      username: data.username,
      email: data.email,
      gender: data.gender,
      phoneNumber: data.phoneNumber,
      address: data.address,
      password: data.password,
      role: data.role,
      department: [data.department],
    });
  };

  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        <div className="center">
          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : (
            <>
              <h2>Add Employee</h2>
              <div className="form-wrap">
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                  <div className="form-group">
                    <input type="text" {...register("username")} />
                    <span>Username</span>
                  </div>
                  <div className="form-group">
                    <input type="text" {...register("email")} />
                    <span>Email</span>
                  </div>
                  <div className="form-group">
                    <select
                      className="form-group__gender"
                      {...register("gender")}
                    >
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
                        departments.map(
                          (department: department, index: number) => (
                            <option key={index} value={department.name}>
                              {department.name}
                            </option>
                          )
                        )}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Role</label>
                    <select
                      className="form-group__gender"
                      {...register("role")}
                    >
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
      </div>
    </>
  );
}

export default EditEmployee;

/**
 * 接口返回基本数据类型
 */
export interface IApiBase<T> {
    code: number;
    msg: string;
    data: T;
}

export interface IWechat {
    qrcode: string;
    ticket: string;
}

/**
* 课程分类接口返回参数
*/
export interface ICategoryList {
    id: number;
    name: string;
    pid: number;
    gmt_create: string;
    gmt_modified: string;
    level: null;
    subCategoryList?: ICategoryList[];
}
/**
 * 轮播图接口返回参数
 */
export interface IBanner {
    id: number;
    location: string;
    name: string;
    img_url: string;
    pc_link: string;
    h5_link: string;
    expired: string;
    del: number;
    gmt_create: string;
    gmt_modified: string;
}
/**
 * 个人信息接口返回
 */
export interface IUserInfo {
    id: number;
    username: string;
    head_img: string;
    phone: string;
    pwd: string;
    position: null;
    slogan: string;
    sex: string;
    city: null;
    role: null;
    learn_time: null;
    vip_rank: number;
    vip_expired: null;
    gmt_create: string;
    gmt_modified: string;
    disabled: null;
    openid: null;
    unionid: null;
}
/**
 * 视频卡片接口返回参数
 */
export interface ICard {
    id: number;
    name: string;
    summay: string;
    row_num: number;
    column_num: number;
    product_list: ProductList[];
    card_type: string;
    icon: string;
    weight: number;
    del: number;
    gmt_create: string;
    gmt_modified: string;
}
/**
 * 课程详情返回参数
 */
export interface ProductList {
    id: number;
    title: string;
    cover_img: string;
    old_amount: string;
    amount: string;
    summary: string;
    detail: string;
    product_type: ProductType;
    uv: number;
    buy_num: number;
    teacher_id: number;
    course_level: CourseLevel;
    hour: number;
    episode_num: number;
    player: Player;
    tdk: null;
    ali_zip_url: null;
    bd_zip_url: null | string;
    note_url: null | string;
    del: number;
    gmt_modified: string;
    gmt_create: string;
    total_point: string;
    content_point: string;
    easy_point: string;
    logic_point: string;
}
export interface ITeacher {
    id: number;
    name: string;
    profile: string;
    head_img: string;
    wechat_qrcode: null | string;
    pay_qrcode: null | string;
    point: number;
    remark: null | string;
    phone: string;
    online: string;
    gmt_create: string;
    gmt_modified: string;
}

export interface IPoductQuery {
    current_data: ProductList[];
    total_page: number;
    total_record: number;
}
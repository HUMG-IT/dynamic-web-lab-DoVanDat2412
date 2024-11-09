const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Đặt URL cơ sở cho các bài kiểm thử E2E
    setupNodeEvents(on, config) {
      // Thêm các sự kiện node nếu cần
    },
    defaultCommandTimeout: 10000, // Đặt thời gian chờ mặc định cho các lệnh (10 giây)
    pageLoadTimeout: 60000, // Đặt thời gian chờ tải trang (60 giây)
    video: false, // Tắt ghi hình trong quá trình kiểm thử để tăng tốc độ
    screenshotsFolder: "cypress/screenshots", // Đặt thư mục lưu ảnh chụp khi kiểm thử thất bại
    viewportWidth: 1280, // Đặt kích thước chiều rộng viewport
    viewportHeight: 720, // Đặt kích thước chiều cao viewport
    browser: "chrome", // Sử dụng Chrome thay vì Electron
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});

# 1. ใช้ Node เวอร์ชันเบา
FROM node:18-alpine

# 2. ตั้ง working directory
WORKDIR /app

# 3. คัดลอกไฟล์ package ก่อน (ช่วย cache install)
COPY package*.json ./

# 4. ติดตั้ง dependencies
RUN npm install

# 5. คัดลอกไฟล์โปรเจกต์ทั้งหมด
COPY . .

# 6. Build Nuxt Project
RUN npm run build

# 7. เปิดพอร์ต 80 และระบุ PORT ที่ Nuxt ใช้
EXPOSE 80
ENV PORT=80

# 8. Run แบบ production (ไม่ใช่ preview)
CMD ["node", ".output/server/index.mjs"]

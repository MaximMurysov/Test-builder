import { Button, Card, Form, Input, Flex, Typography } from 'antd';
import styles from './LoginPage.module.css';
type FieldType = {
  email: string;
  password: string;
};
export const LoginPage = () => {
  const handleFinish = (values: FieldType) => {
    console.log(values);
  };
  return (
    <Flex justify="center" align="center" className={styles.wrapper}>
      <Card className={styles.card}>
        <Typography.Title level={3}>Test builder</Typography.Title>
        <Typography.Text type="secondary">Войдите, чтобы создавать формы</Typography.Text>
        <Form layout="vertical" onFinish={handleFinish}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Введите email' },
              { type: 'email', message: 'Некорректный email' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Пароль"
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Войти
          </Button>
        </Form>
      </Card>
    </Flex>
  );
};

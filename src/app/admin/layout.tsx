'use client'

import React, { useCallback, useState } from 'react'
import { Layout, Menu, theme } from 'antd'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
// import { authOptions } from '~/app/api/auth/options'
import { useSession } from 'next-auth/react'

const { Header, Footer, Sider, Content } = Layout

export default function BrowseLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()

  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const toggleCollapsed = useCallback(() => {
    setCollapsed((current) => !current)
  }, [])

  return (
    <Layout className="min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <AiOutlineMenuFold />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <AiOutlineMenuFold />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <AiOutlineMenuFold />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="flex flex-row items-center"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <div
            onClick={toggleCollapsed}
            className="cursor-pointer px-6 transition delay-0 duration-300 hover:text-[#1890ff]"
          >
            {collapsed ? <AiOutlineMenuUnfold size={24} /> : <AiOutlineMenuFold size={24} />}
          </div>
          <span className="text-lg font-bold uppercase">My Netflix Administrator</span>
        </Header>
        <Content
          className="mx-4 my-6 min-h-[280] px-6 py-6 delay-0"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Next Netflix Clone ©2023 Created by HieuBQ</Footer>
      </Layout>
    </Layout>
    // <div className="h-screen w-screen bg-zinc-500">

    // </div>
  )
}

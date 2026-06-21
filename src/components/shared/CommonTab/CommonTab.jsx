import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const CommonTab = ({
  tabs = [],
  defaultValue,
  onTabChange,
  className = "",
}) => {
  return (
    <Tabs
      defaultValue={defaultValue || tabs[0]?.value}
      onValueChange={onTabChange}
      orientation="horizontal"
      className={className}
    >
      <TabsList className="bg-transparent gap-4 h-auto p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 data-active:bg-card data-active:border data-active:border-border data-active:shadow-sm data-active:text-primary bg-muted text-dark-gray border border-transparent hover:text-primary"
          >
            {tab.icon}
            {tab.label}
            {tab.count !== undefined && <span>( {tab.count} )</span>}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-0">
          {tab.content}
        </TabsContent>
      ))}

    </Tabs>
  )
}

export default CommonTab

class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts, comment: 'Статьи' do |t|
      t.string :title, comment: 'Заголовок'
      t.text :content, comment: 'Содержимое'

      t.timestamps
    end
  end
end

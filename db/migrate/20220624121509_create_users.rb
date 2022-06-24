class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users, comment: 'Пользователи' do |t|
      t.with_options index: { unique: true } do
        string :name, comment: 'Логин'
        string :email, comment: 'email'
      end
      t.boolean :active,
                default: true,
                comment: 'активен (true)/заблокирован (false)'

      t.timestamps
    end
  end
end

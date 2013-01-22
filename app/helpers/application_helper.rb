module ApplicationHelper

  # Render shared partial template
  # @params template [String] template name
  # @params options [Hash] oprions hash
  # @return string
  def render_shared_partial(template, options={})
    options[:partial] = "shared/#{template}"
    render options
  end

  # Render link
  # @return [String]
  def logo
    link_to 'Map for parants', root_path, class: 'brand'
  end
end
